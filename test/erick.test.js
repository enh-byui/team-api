const fetch = require("node-fetch2");

it("Should get a login token",async ()=>{

    const response = await fetch('http://localhost:3000/erick');
    const name = await response.text();

    console.log(name);

    expect(name).toBe("erick");

})