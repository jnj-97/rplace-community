
import { useState } from "react";
import { GithubPicker } from "react-color";
import Cursor from "react-cursor-follow";
const Canvas = () => {
    const [color,setColor]=useState("#fff")
    const [username,setUsername]=useState('')

    const [visibility,setVisibility]=useState("invisble")
    const [initialFetch,setInitialFetch]=useState(true)
    if(initialFetch==true){
        fetch(process.env.REACT_APP_SERVER_URL+'/initial',{
            method:"GET",
    headers:{'Content-type':'application/json'},    
    }).then(res=>res.json()).then(res=>{ 
        res.map(element=>{
            return(document.getElementById(element.tileid).style.backgroundColor=element.color)
        }) 

    setInitialFetch(false)
    })}
 
    function displayUsername(id){
        fetch(process.env.REACT_APP_SERVER_URL+'/updateUsername',{
            method:"POST",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({ID:id})
    }).then(res=>res.json()).then(res=>setUsername(res.username))
   
        setVisibility("visible")
    }
    function updateColor(id){
        fetch(process.env.REACT_APP_SERVER_URL+'/updateColor',{
            method:"POST",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({ID:id,username:localStorage.getItem('username'),color:color})
    }).then(res=>res.json()).then(res=>{
        if(res.timelimit==false){
            setUsername("Please try again after 5 minutes")
        }
        else{
            document.getElementById(id).style.backgroundColor=color
            setInitialFetch(true)
            
        }
    })
    }
    return ( <div className="mt-10 ml-10">
        <div className="text-black text-center"><span className="text-xl">Rules</span>
        <ul>
            <li>Each User can select a color and color a tile</li>
            <li>Each User can color a tile every 5 minutes</li>
            <li>If no color is selected, the default color is white</li>
            <li>HAVE FUN</li>
        </ul></div>
        <GithubPicker color={color} onChange={updatedColor=>{setColor(updatedColor.hex)}} />
        <div className="flex"><div onClick={()=>{updateColor("00")}}  onMouseLeave={()=>setVisibility("invisible")}  className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="00" onMouseEnter={()=>displayUsername("00")} value="00"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="01" onClick={()=>{updateColor("01")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("01")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="02" onClick={()=>{updateColor("02")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("02")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="03" onClick={()=>{updateColor("03")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("03")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="04" onClick={()=>{updateColor("04")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("04")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="05" onClick={()=>{updateColor("05")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("05")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="06" onClick={()=>{updateColor("06")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("06")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="07" onClick={()=>{updateColor("07")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("07")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="08" onClick={()=>{updateColor("08")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("08")} ></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="09" onClick={()=>{updateColor("09")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("09")} ></div>
        </div>
        <div className="flex"><div id="10" onClick={()=>{updateColor("10")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("10")} className="hover:border-2 border-black h-32 w-32 bg-gray-300"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="11" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("11")} onClick={()=>{updateColor("11")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="12" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("12")} onClick={()=>{updateColor("12")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="13" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("13")} onClick={()=>{updateColor("13")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="14" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("14")} onClick={()=>{updateColor("14")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="15" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("15")} onClick={()=>{updateColor("15")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="16" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("16")} onClick={()=>{updateColor("16")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="17" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("17")} onClick={()=>{updateColor("17")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="18" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("18")} onClick={()=>{updateColor("18")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="19" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("19")} onClick={()=>{updateColor("19")}}></div>
        </div>
        <div className="flex"><div id="20" onClick={()=>{updateColor("20")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("20")} className="hover:border-2 border-black h-32 w-32 bg-gray-300"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="21" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("01")} onClick={()=>{updateColor("21")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="22" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("02")} onClick={()=>{updateColor("22")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="23" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("03")} onClick={()=>{updateColor("23")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="24" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("04")} onClick={()=>{updateColor("24")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="25" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("05")} onClick={()=>{updateColor("25")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="26" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("06")} onClick={()=>{updateColor("26")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="27" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("07")} onClick={()=>{updateColor("27")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="28" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("08")} onClick={()=>{updateColor("28")}}></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="29" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("09")} onClick={()=>{updateColor("29")}}></div>
        </div>
        <div className="flex"><div onClick={()=>{updateColor("30")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("01")} className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="30"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("31")} onClick={()=>{updateColor("31")}} id="31"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("32")} onClick={()=>{updateColor("32")}} id="32"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("33")} onClick={()=>{updateColor("33")}} id="33"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("34")} onClick={()=>{updateColor("34")}} id="34"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("35")} onClick={()=>{updateColor("35")}} id="35"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("36")} onClick={()=>{updateColor("36")}} id="36"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("37")} onClick={()=>{updateColor("37")}} id="37"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("38")} onClick={()=>{updateColor("38")}} id="38"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("39")} onClick={()=>{updateColor("39")}} id="39"></div>
        </div>
        <div className="flex"><div onClick={()=>{updateColor("40")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("40")} className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="40"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("41")} onClick={()=>{updateColor("41")}} id="41"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("42")} onClick={()=>{updateColor("42")}} id="42"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("43")} onClick={()=>{updateColor("43")}} id="43"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("44")} onClick={()=>{updateColor("44")}} id="44"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("45")} onClick={()=>{updateColor("45")}} id="45"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("46")} onClick={()=>{updateColor("46")}} id="46"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("47")} onClick={()=>{updateColor("47")}} id="47"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("48")} onClick={()=>{updateColor("48")}} id="48"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("49")} onClick={()=>{updateColor("49")}} id="49"></div>
        </div>
        <div className="flex"><div onClick={()=>{updateColor("50")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("50")} className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="50"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("51")} onClick={()=>{updateColor("51")}} id="51"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("52")} onClick={()=>{updateColor("52")}} id="52"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("53")} onClick={()=>{updateColor("53")}} id="53"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("54")} onClick={()=>{updateColor("54")}} id="54"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("55")} onClick={()=>{updateColor("55")}} id="55"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("56")} onClick={()=>{updateColor("56")}} id="56"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("57")} onClick={()=>{updateColor("57")}} id="57"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("58")} onClick={()=>{updateColor("58")}} id="58"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("59")} onClick={()=>{updateColor("59")}} id="59"></div>
        </div>
        <div className="flex"><div onClick={()=>{updateColor("60")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("60")} className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="60"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("61")} onClick={()=>{updateColor("61")}} id="61"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("62")} onClick={()=>{updateColor("62")}} id="62"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("63")} onClick={()=>{updateColor("63")}} id="63"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("64")} onClick={()=>{updateColor("64")}} id="64"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("65")} onClick={()=>{updateColor("65")}} id="65"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("66")} onClick={()=>{updateColor("66")}} id="66"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("67")} onClick={()=>{updateColor("67")}} id="67"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("68")} onClick={()=>{updateColor("68")}} id="68"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("69")} onClick={()=>{updateColor("69")}} id="69"></div>
        </div>
        <div className="flex"><div onClick={()=>{updateColor("70")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("70")} className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="70"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("71")} onClick={()=>{updateColor("71")}} id="71"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("72")} onClick={()=>{updateColor("72")}} id="72"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("73")} onClick={()=>{updateColor("73")}} id="73"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("74")} onClick={()=>{updateColor("74")}} id="74"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("75")} onClick={()=>{updateColor("75")}} id="75"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("76")} onClick={()=>{updateColor("76")}} id="76"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("77")} onClick={()=>{updateColor("77")}} id="77"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("78")} onClick={()=>{updateColor("78")}} id="78"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("79")} onClick={()=>{updateColor("79")}} id="79"></div>
        </div>
        <div className="flex"><div onClick={()=>{updateColor("80")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("80")} className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="80"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("81")} onClick={()=>{updateColor("81")}} id="81"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("82")} onClick={()=>{updateColor("82")}} id="82"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("83")} onClick={()=>{updateColor("83")}} id="83"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("84")} onClick={()=>{updateColor("84")}} id="84"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("85")} onClick={()=>{updateColor("85")}} id="85"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("86")} onClick={()=>{updateColor("86")}} id="86"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("87")} onClick={()=>{updateColor("87")}} id="87"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("88")} onClick={()=>{updateColor("88")}} id="88"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("89")} onClick={()=>{updateColor("89")}} id="89"></div>
        </div>
        <div className="flex"><div onClick={()=>{updateColor("90")}} onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("90")} className="hover:border-2 border-black h-32 w-32 bg-gray-300" id="90"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("91")} onClick={()=>{updateColor("91")}} id="91"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("92")} onClick={()=>{updateColor("92")}} id="92"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("93")} onClick={()=>{updateColor("93")}} id="93"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("94")} onClick={()=>{updateColor("94")}} id="94"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("95")} onClick={()=>{updateColor("95")}} id="95"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("96")} onClick={()=>{updateColor("96")}} id="96"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("97")} onClick={()=>{updateColor("97")}} id="97"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("98")} onClick={()=>{updateColor("98")}} id="98"></div>
        <div className="hover:border-2 border-black h-32 w-32 bg-gray-300" onMouseLeave={()=>setVisibility("invisible")} onMouseEnter={()=>displayUsername("99")} onClick={()=>{updateColor("99")}} id="99"></div>
        </div>

       <Cursor className={visibility}>{username}</Cursor> 
        
    </div> );
}
 
export default Canvas;