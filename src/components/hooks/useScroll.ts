import  { useEffect, useRef } from "react";


export default function UseScroll(
    prentRef: any, 
    childRef: any, 
    fetching: boolean, 
    error: any, 
    totalCount: number,  
    todos: [],
    callback: any, 
    callback2: any
) {
    const observer: any = useRef();
    const totalCounts =  ((totalCount === 0) ? 10 : totalCount)
    const options = {
        root: prentRef.curent,
        rootMargin: '0px',
        threshold: 0
    }
   
    useEffect(() => {
        if (!error ) {
        observer.current = new IntersectionObserver(([target]) => {
            
            if(target.isIntersecting && todos.length < totalCounts) {
                callback2()
                if (fetching ){
                    callback()
                }
            }
        }, options)
    
        
        observer.current.observe(childRef.current)

        return  () => observer.current.unobserve(childRef.current)

}}, [ fetching, error ]) 
    
}
