import{r as a,_ as t,j as s,a as e,C as l}from"./index-8f7dedf1.js";const r=a.lazy(()=>t(()=>import("./LineChart-41e47530.js"),["assets/LineChart-41e47530.js","assets/index-8f7dedf1.js","assets/index-07ba3778.css","assets/generateCategoricalChart-5af20d54.js"])),i=a.lazy(()=>t(()=>import("./PieChart-ed97f46b.js"),["assets/PieChart-ed97f46b.js","assets/index-8f7dedf1.js","assets/index-07ba3778.css","assets/generateCategoricalChart-5af20d54.js","assets/PieChart-6a301875.css"])),m=()=>s("div",{className:"flex flex-col lg:flex-row justify-between lg:space-x-6",children:[e("div",{className:"w-full lg:w-[60%]",children:e("div",{className:"mt-5",children:s(l,{className:"bg-secondary !w-full p-8",children:[e("h1",{className:"text-2xl font-semibold",children:"Sales"}),e("p",{className:"mt-3 text-sm font-semibold",children:"Sales by Category (Last 30 days)"}),e("div",{className:"mychart mt-8",children:e(r,{})}),s("p",{className:"mt-3 text-sm font-semibold",children:["For more details, visit the"," ",e("a",{href:"#",className:"text-accent-light cursor-pointer hover:underline",children:"Sales Dashboard"})]})]})})}),e("div",{className:"w-full lg:w-[40%] lg:mt-0 lg:mr-0 mr-5",children:e("div",{className:"mt-5",children:s(l,{className:"bg-secondary !w-full p-8",children:[e("h1",{className:"text-2xl font-semibold",children:"Profit"}),e("p",{className:"mt-3 text-sm font-semibold",children:"Profit by margin"}),e("div",{className:"mychart mt-8",children:e(i,{})}),e("p",{className:"mt-3 text-sm font-semibold",children:"Values are in NGN"})]})})})]});export{m as default};