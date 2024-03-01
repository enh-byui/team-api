const fetch = require("node-fetch2");

it("Should get a login token",async ()=>{

    let token = "";//this is an emptry string
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"scmurdock@gmail.com",
            "password":"P@ssw0rd"
        })
    }

    const response = await fetch('http://localhost:3000/skyler');
    const name = await response.text();
    expect.name.toBe("skyler");
    
    token = await response.text();
    console.log("Token "+token);
    const status = response.status;

    expect(status).toBe(200);
    expect(token.length).toBe(36);

})