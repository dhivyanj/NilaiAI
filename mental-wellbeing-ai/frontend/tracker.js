const API = "http://localhost:8000/behavior/track";

let start = Date.now(), count = 0;
["click","scroll","keydown","mousemove"].forEach(e =>
  document.addEventListener(e,()=>count++)
);

window.addEventListener("beforeunload",()=>{
  navigator.sendBeacon(API,JSON.stringify({
    user_id:"hypothetical_user",
    login_time:new Date(start).toTimeString().slice(0,5),
    session_duration:Math.round((Date.now()-start)/60000),
    active_events:count,
    timestamp:new Date().toISOString().slice(0,10)
  }));
});
