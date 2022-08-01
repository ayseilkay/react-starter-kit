function Tab({children,activeTab}) {
    console.log(children)
  return <div>
    
    <nav>
        {children.map((item,index)=>
          <button key={index} className={activeTab === index ? 'bg-green-700' : ''}> {item.props.title}</button>
        )}
    </nav>
    {children}
  </div>;
}



export default Tab;

 Tab.Panel=function({children,title}){
    return(
        <div>{children} {title}</div>
    )
}
