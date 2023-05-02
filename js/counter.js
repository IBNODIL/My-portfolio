let counter =0;
        let textRunner = document.getElementById("box");
        textRunner.classList.add("box");

        function add(){
            counter+=1;
            textRunner.textContent = counter;
            console.log(counter);
        }

        function minus(){
            counter-=1;
            textRunner.textContent = counter;
            console.log(counter);
        }