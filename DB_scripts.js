const sql = require('mssql')
const ActionsPage = require("./pages/actions.pages")

var act_date = new Date();

var config = {
    server: 'schome-intdb.web.scorpion.co',
    authentication: {
        type: 'default',
        options: {
            userName: 'sql_CSXBillingDevReadWrite',
            password: 'z84lUjPjth<n0lOz'
        }
    }
}

async function getInfo() {
    var headers = await ActionsPage.bearer()
    var subscriptions_list = await ActionsPage.get_all_subscriptions(headers)
    var payment_methods_list = await ActionsPage.get_payment_methods(headers)
    await ActionsPage.logoff(headers)
    return [subscriptions_list.data.getAllSubscriptions[0].item1.subscriptionID, payment_methods_list.data.getPaymentMethods[0].paymentMethodID]
}

async function generateBillingLineItems(invoiceId, subscription) {
    var min = 100
    var max = 1000
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var unitAmount1 = getRandomInt(min, max)
    var unitAmount2 = getRandomInt(min, max)
    var unitAmount3 = getRandomInt(min, max)
    var unitAmount4 = getRandomInt(min, max)
    var quantity1 = getRandomInt(1, 2)
    var quantity2 = getRandomInt(1, 2)
    var quantity3 = getRandomInt(1, 3)
    var quantity4 = getRandomInt(1, 3)
    var query_I_BLI = `INSERT INTO [CSXBilling].csb.Invoices_BillingLineItems
    (BillingLineItemID,InvoiceID,Quantity,UnitPrice,Amount,BusinessTypeID,LocationID,PaidAdvertising,PaidAdvertisingMeta,ModifiedBy)
    VALUES
    ('1','` + invoiceId + `','` + quantity1 + `','` + unitAmount1 + `','` + (quantity1 * unitAmount1) + `','1','42322','','',''),
    ('14','` + invoiceId + `','` + quantity2 + `','` + unitAmount2 + `','` + (quantity2 * unitAmount2) + `','1','42322','','',''),
    ('17','` + invoiceId + `','` + quantity3 + `','` + unitAmount3 + `','` + (quantity3 * unitAmount3) + `','1','42322','','',''),
    ('13','` + invoiceId + `','` + quantity4 + `','` + unitAmount4 + `','` + (quantity4 * unitAmount4) + `','1','42322','','','')
    `
    console.log(query_I_BLI)
    // generateSubscription_BillingLineItems(subscription, quantity1, unitAmount1)
    let connection = await sql.connect(config)
    await sql.query([query_I_BLI])
    // await connection.close()
    var query = `
    INSERT INTO [CSXBilling].csb.Subscriptions_BillingLineItems
    (BillingLineItemID,SubscriptionID,Quantity,UnitPrice,Amount,BusinessTypeID,LocationID,PaidAdvertising,PaidAdvertisingMeta,FutureBilling,ModifiedBy)
    VALUES
    ('1',` + subscription + `,` + quantity1 + `,` + unitAmount1 + `,` + (quantity1 * unitAmount1) + `,'','','','','0',''),
    ('14',` + subscription + `,` + quantity2 + `,` + unitAmount2 + `,` + (quantity2 * unitAmount2) + `,'','','','','0',''),
    ('17',` + subscription + `,` + quantity3 + `,` + unitAmount3 + `,` + (quantity3 * unitAmount3) + `,'','','','','0',''),
    ('13',` + subscription + `,` + quantity4 + `,` + unitAmount4 + `,` + (quantity4 * unitAmount4) + `,'','','','','0','')
    `
    console.log(query)
    // let connection = await sql.connect(config)
    await sql.query([query])
    await connection.close()
}

// async function generateSubscription_BillingLineItems(subscription, quantity1, unitAmount1){


// }

async function generateInvoices(month, subscription, payment_method) {
    var year = act_date.getFullYear();
    var start_of_month = new Date(year, month, 1).toISOString().substring(0, 23)
    var end_of_month = new Date(year, month + 1, 0).toISOString().substring(0, 23);
    var query = `
    INSERT INTO [CSXBilling].csb.Invoices
    (ClientID,InvoiceNumber,SubscriptionID,SourceID,PaymentMethodID,DueDate,StartDate,EndDate,InvoiceCreatedDate,AmountPaid,PaidInFull,InvoiceStatusID)
    VALUES
    ('4197','`+ "112233" + (month + 1) + `','` + subscription + `','1','` + payment_method + `','` + end_of_month + `','` + start_of_month + `','` + end_of_month + `','` + start_of_month + `','0','0','3')
    `
    console.log(query)
    let connection = await sql.connect(config)
    await sql.query([query])
    await connection.close()
    var invoiceId = await retrieveInvoiceId("112233" + (month + 1))
    await generateBillingLineItems(invoiceId, subscription)
}

async function generateSubscription() {
    var data = await getInfo()
    console.log(data[0])
    var query = `
    INSERT INTO [CSXBilling].csb.Subscriptions
    (SubscriptionSystem,SubscriptionExternalID,ClientID,SubscriptionStartDate,SubscriptionEndDate,MonthToMonth,BillingStartDay,BillingFrequency,Void,Autopay,PaymentMethodID,FriendlyName,ModifiedBy)
    VALUES
    ('1','1','4197','2021-01-01 00:00:00.000','2024-01-01 00:00:00.000','1','1','1','0','0','` + payment_method + `','Sub 1',NULL)
    `
    console.log(query)
    let connection = await sql.connect(config)
    await sql.query([query])
    await connection.close()
}

async function getInvoiceData(invoiceNumber) {
    let connection = await sql.connect(config)
    var result = await sql.query(["SELECT * FROM [CSXBilling].csb.Invoices WHERE InvoiceNumber = '" + invoiceNumber + "'"])
    await connection.close()
    return result
}

var month = act_date.getMonth();

// generateSubscription()

run_months(month)

async function run_months(month) {
    var data = await getInfo()
    for (var i = month; i >= month-1; i--) {
        generateInvoices(i, data[0], data[1])
    }
}


async function retrieveInvoiceId(invoiceNumber) {
    var InoviceData = await getInvoiceData(invoiceNumber)
    return InoviceData.recordset[0].InvoiceID
}
