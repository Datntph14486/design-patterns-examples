class EventEmitter {
    private static events: Record<string, Function[]>  = {
        
    };
    static on(event: string, func: Function){

        if(!this.events[event]){
            this.events[event] = [func];
        }else{
            this.events[event].push(func);
        }
    };

    static off(event: string, func: Function){
        if(!this.events[event]){
            return;
        };
        this.events[event] = this.events[event].filter((f)=> f !== func);
    };
    
    static emit(event: string, ...args: string[]){
         if(!this.events[event]){
            return;
        };
        for(const func of this.events[event]){
            func(...args);
        }
    }
};

function A(...agrs: string[]){
    console.log(`0: ${agrs}`);
}

function B(...agrs: string[]){
    console.log(`1: ${agrs}`);
}

function C(...agrs: string[]){
    console.log(`2: ${agrs}`);
}

EventEmitter.on('event1', A);

EventEmitter.on('event1', B);

EventEmitter.on('event1', C);

EventEmitter.emit('event1', 'Nguyen', 'Tien', 'Dat');

EventEmitter.off('event1', C);

EventEmitter.emit('event1', 'Nguyen', 'Manh', 'Cuong');
