
function start(){
    BX24.callMethod(
        'crm.contact.list',
        {
           select: [
                "NAME",
                "LAST_NAME",
                "EMAIL",
            ],
        },
        (result) => {
            //app.contacts = result.data()
        },
    );
}

