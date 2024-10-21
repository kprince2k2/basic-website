function showSection(section) {
        document.getElementById('main').style.display = 'none';
        document.getElementById('area').style.display = 'none';
        document.getElementById('volume').style.display = 'none';
        document.getElementById('distance').style.display = 'none';

        document.getElementById(section).style.display = 'block';
    }
    function showshape(section) {
        
        document.getElementById('circle').style.display = 'none';
        document.getElementById('triangle').style.display = 'none';
        document.getElementById('square').style.display = 'none';
        document.getElementById('rectangle').style.display = 'none';
        document.getElementById('h1').style.display = 'none';

        document.getElementById(section).style.display = 'block';
    }
    
    const no1=parseInt(document.getElementById("num1").value);
    const no2=parseInt(document.getElementById("num2").value);

        function add(){
            const no1=parseInt(document.getElementById("num1").value);
            const no2=parseInt(document.getElementById("num2").value);
            if(!isNaN(no1) && !isNaN(no2)){
            document.getElementById("ans").innerHTML=`Addition of No1 & No2 is: ${no1+no2}`;
            }else{
                alert("please enter a valid number");
            }
        }
        function sub(){
            const no1=parseInt(document.getElementById("num1").value);
            const no2=parseInt(document.getElementById("num2").value);
            if(!isNaN(no1) && !isNaN(no2)){
                document.getElementById("ans").innerHTML=`Subtraction of No1 & No2 is: ${no1-no2}`;
            }else{
                alert("please enter a valid number");
            }
            
        }
        function mul(){
            const no1=parseInt(document.getElementById("num1").value);
            const no2=parseInt(document.getElementById("num2").value);
            if(!isNaN(no1) && !isNaN(no2)){
                document.getElementById("ans").innerHTML=`Multiplication of No1 & No2 is: ${no1*no2}`;
            }else{
                alert("please enter a valid number");
            }
        }
        function div(){
            const no1=parseInt(document.getElementById("num1").value);
            const no2=parseInt(document.getElementById("num2").value);
            if(!isNaN(no1) && !isNaN(no2)){
                document.getElementById("ans").innerHTML=`Divition of No1 & No2 is: ${(no1/no2).toFixed(4)}`;
            }else{
                alert("please enter a valid number");
            }
        }
        
        function calculate_circle(){
            const rad=parseInt(document.getElementById("radius").value);
            let area=rad*rad*3.14;
            if(!isNaN(rad)){
                document.getElementById("circle_area").innerHTML=`Area of circle: ${(area).toFixed(4)}`;
            }else{
                alert("please enter a valid number");
            }
            }

        function calculate_triangle(){
            const base=parseInt(document.getElementById("base").value);
            const height=parseInt(document.getElementById("height").value);
            let area=0.5*height*base;
            if(!isNaN(base)&&!isNaN(height)){
                document.getElementById("triangle_area").innerHTML=`Area of Triangle: ${(area).toFixed(4)}`;
            }else{
                alert("please enter a valid number");
            }
            }

        function calculate_square(){
            const side=parseInt(document.getElementById("side").value);
            let area=side*side;
            if(!isNaN(side)){
                document.getElementById("square_area").innerHTML=`Area of Square: ${(area).toFixed(4)}`;
            }else{
                alert("please enter a valid number");
            }
            }
        function calculate_rectangle(){
            const length=parseInt(document.getElementById("length").value);
            const breadth=parseInt(document.getElementById("breadth").value);
            let area=length*breadth;
            if(!isNaN(length)&&!isNaN(breadth)){
                document.getElementById("rectangle_area").innerHTML=`Area of Rectangle: ${(area).toFixed(4)}`;
            }else{
                alert("please enter a valid number");
            }
            }
