class CustomTabs{
    constructor(buttonIds, containerIds, options){
        this.buttonIds = buttonIds;
        this.containerIds = containerIds;
        this.options = this.sanitizeOptions(options);
        this.initilize();
    }

    sanitizeOptions = (options)=>{
        if (typeof(options.activeBtnClass) === "undefined"){
            options.activeBtnClass = "";
        }
        
        if (typeof(options.baseBtnClass) === "undefined"){
            options.baseBtnClass = "";
        }
        
        if (typeof(options.setClassAtInit) != "boolean"){
            options.setClassAtInit = false;
        }

        return options;
        
    }

    initilize = ()=>{
        //get elements
        this.buttons = this.buttonIds.map((btn)=>document.querySelector(btn));
        this.containers = this.containerIds.map((cont)=>document.querySelector(cont));
        this.currentSlide = 0;

        this.buttons.map((btn, i)=>{
            if (btn != null && this.containers[i] != null){
                btn.addEventListener("click", (event)=>{
                    let ele = event.currentTarget;
                    this.ShowSlide(parseInt(ele.getAttribute("data-index")));
                });

                if (this.options.setClassAtInit){
                    if (i == this.currentSlide){
                        btn.setAttribute("class", `${this.options.activeBtnClass} ${this.options.baseBtnClass}`);
                    }else{
                        btn.setAttribute("class", `${this.options.baseBtnClass}`);
                    }
                }
                
                btn.setAttribute("data-index", i);

                if (this.containers[i] != null){ //skips first element
                    if (i == this.currentSlide){
                        this.containers[i].style.display = "block";
                    }else{
                        this.containers[i].style.display = "none";
                    }
                }
            }
        });
    }

    ShowSlide = (index)=>{
        if (this.buttons.length.length == 0){
            console.warn("Warning: ShowSlide is called but currently no slides to show.");
            return;
        }

        if (index >= this.buttons.length){
            throw "index is out of bound.";
        }

        if (index == this.currentSlide){
            return; //save cpu cycles
        }

        //hide old tab
        if (this.currentSlide >= 0 && this.currentSlide < this.containers.length){
            this.containers[this.currentSlide].style.display = "none";
            this.buttons[this.currentSlide].classList.remove(this.options.activeBtnClass);
        }

        this.currentSlide = parseInt(index);

        this.containers[this.currentSlide].style.display = "block";
        this.buttons[this.currentSlide].classList.add(this.options.activeBtnClass);

        //remove current active btn style class
        this.buttons[this.currentSlide].classList.add("custom-tabcontrol-active");
    }

    NextSlide = ()=>{
        let n = this.currentSlide++;
        if (n >= this.buttons.length){
            n = 0;
        }

        this.ShowSlide(n);
    }

    PreviousSlide = ()=>{
        let n = this.currentSlide--;
        if (n < 0){
            n = this.buttons.length - 1;
        }

        this.ShowSlide(n);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    tab1 = new CustomTabs(["#button-tabs-description", "#button-tabs-reviews"], ["#container-tabs-description", "#container-tabs-reviews"], {
        activeBtnClass:"custom-tabcontrol-active",
        baseBtnClass:"custom-tabcontrol"
    });
})
/*
Example usage 
const tab1 = new CustomTabs(["#btn1"], ["#cont1"], {
    activeBtnClass:"custom-tabcontrol-active",
    baseBtnClass:"custom-tabcontrol"
});


*/