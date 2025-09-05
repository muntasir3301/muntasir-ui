import Formet from "@/components/displayFormet/Formet";
import Preview from "@/components/displayFormet/Preview";
import Code from "@/components/displayFormet/Code";
import CodeEditor from "@/components/displayFormet/CodeEditor";
// import api from "@/utils/axiosConfig";

export default async function Display({category, components}) {
	let data = [];
	try{
		// const res = await api.get(`/code/${category}`, {
		// 	headers: {
		// 		'Cache-Control' : 'no-store'
		// 	}
		// });
		// data = res.data;
	}catch(err){
		console.log(err)
	}

  return (
    <>
      {
	  data?.map((ele, i)=>{
		const Component = components[i]; 
		return (
		<Formet key={ele.id}>
			{ <p className=" mb-1 ml-2 text-gray-400">{ele.id}</p> }
			<Preview id={i}>
			{
			  Component && <Component/>
			}
			</Preview>
			<Code id={i}>
			   <CodeEditor code={ele.code}/>
			</Code>
		</Formet>
		)
	  })
	}
    </>
  );
}
