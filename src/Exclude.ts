

//exclude >>

//in a function that can accept several types of inputs but you want to exclude specific types 
//from being passed to it >>>

type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType , "scroll">;

const handleEvent = (event : ExcludeEvent) => {
    console.log(`Handling Event : ${event}`);
};

handleEvent('click');
