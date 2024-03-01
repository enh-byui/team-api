
const response = await fetch('http://localhost:3000/angelica');
const name = await response.text();
expect.name.toBe("angelica");
    
token = await response.text();
console.log("Token "+token);
const status = response.status;

expect(status).toBe(200);
expect(token.length).toBe(36);
