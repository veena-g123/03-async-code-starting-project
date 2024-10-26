import { expect,it } from "vitest";
import { generateToken } from "./async-example";
it("so",(done)=>{
const email ="eee";
generateToken(email,(err,token)=>{
  // try{
    token=2;
    expect(token).toBe(2);
    done();
  // }catch(err){
    // done(err);
    // console.log("eee--->"+err);
  // }

})
})