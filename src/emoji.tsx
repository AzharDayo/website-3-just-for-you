import {useState,cloneElement,isValidElement,type ReactNode,type ReactElement} from 'react';
function Emoji({value,code}:{value:string;code:string}){const [failed,setFailed]=useState(false);return failed?<>{value}</>:<img className="emoji" src={"/assets/emoji/"+code+".svg"} alt={value} draggable={false} onError={()=>setFailed(true)}/>;}
// Local Twemoji artwork avoids platform-dependent emoji rendering.
export function emojiTree(node:ReactNode):ReactNode {
 if(typeof node==='string'){
  const regex=/\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic}|\p{Emoji_Modifier})*/gu;
  const out:ReactNode[]=[];let start=0;for(const m of node.matchAll(regex)){if(m.index!>start)out.push(node.slice(start,m.index));const code=Array.from(m[0]).filter(c=>c.codePointAt(0)!==0xfe0f).map(c=>c.codePointAt(0)!.toString(16)).join('-');out.push(<Emoji key={m.index} code={code} value={m[0]}/>);start=m.index!+m[0].length;}return out.length?[...out,node.slice(start)]:node;
 }
 if(Array.isArray(node))return node.map(emojiTree);
 if(isValidElement(node)){const el=node as ReactElement<{children?:ReactNode}>;if(el.props.children!==undefined)return cloneElement(el,{},emojiTree(el.props.children));}
 return node;
}
