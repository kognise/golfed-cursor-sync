_=0;v=new((x=require)('ws').WebSocketServer)({server:x('http').createServer((_,r)=>r.end(`<script>m={};w=new WebSocket('ws://'+location.host);onmousemove=e=>w.send(JSON.stringify([e.x/innerWidth,e.y/innerHeight]));w.on${z='message'}=e=>([i,[x,y]]=JSON.parse(e.data),!m[i]&&Object.assign((m[i]=(d=document).body.appendChild(d.createElement('i'))).style,{position:'fixed',borderRadius:'8px',background:'hsl('+Math.random()*360+',80%,50%)',padding:8}),x<0?m[i].remove():(m[i].style.top=y*100+'%',m[i].style.left=x*100+'%'))</script>`)).listen(8e3)}).on('connection',s=>{let h=m=>v.clients.forEach(o=>o!=s&&o.readyState&&o.send(JSON.stringify([i,JSON.parse(m)])));i=++_;s.on(z,h).on('close',_=>h([-1]))})