document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("add-course").addEventListener("click", addCourse);
    document.getElementById("remove-course").addEventListener("click", removeCourse);
    document.getElementById("calculate_cpi").addEventListener("click", calculateCPI);
    document.getElementById("calculate_gp").addEventListener("click", calculateCPI_gp);

    let no_of_courses = 5;
    function validateFields()
    {
        let cpi_vf = document.getElementById("cpi").value;
        if(cpi_vf == "" || cpi_vf > 10 || cpi_vf < 0)
        {
            alert("Please Enter Valid CPI");
            return false;
        }

        let total_credits = document.getElementById("total-credits").value;

        if(total_credits =="" || total_credits < 0 )
        {
            alert("Please Enter Valid Total Credtis");
        }

        let ptrs_class = document.getElementsByClassName("ptrs");
        
        let credits_class = document.getElementsByClassName("credits");
        for(let element of credits_class)
        {
            if(element.value == "" || element.value <2 || element.value > 5)
            {
                alert("Please Enter Valid Credits");
                return false;
            }
        }

        for(let element of ptrs_class)
        {
            if(element.value == "" || element.value < 0 || element.value > 10)
            {
                alert("Please Enter Valid Expected Pointers");
                return false;
            }
        }

        return true;
    }
    function calculateCPI() {

        if (validateFields()) {
            let curr_cpi = document.getElementById("cpi").value;
            let credits = document.getElementById("total-credits").value;

            let prev_gradepts = credits * curr_cpi;
            console.log(prev_gradepts);

            const expected_ptrs = document.getElementsByClassName("ptrs");
            const new_credits = document.getElementsByClassName("credits");

            let earned_gradepoints = 0;
            let this_sem_credits = 0;
            for (let i = 0; i <= no_of_courses - 1; i++) {
                this_sem_credits = parseFloat(this_sem_credits) + parseFloat(new_credits[i].value);
                console.log(this_sem_credits);
                
                earned_gradepoints = parseFloat(earned_gradepoints) + (parseFloat(new_credits[i].value) * parseFloat(expected_ptrs[i].value));
                console.log(earned_gradepoints);

            }
            credits = parseFloat(this_sem_credits) + parseFloat(credits);
            console.log(credits);
            let total_gradepoints = (earned_gradepoints) + (prev_gradepts);
            console.log(total_gradepoints);
            let new_cpi = ((total_gradepoints) / parseFloat(credits));

            let spi = ((earned_gradepoints)/parseFloat(this_sem_credits));
            console.log(spi);

            document.querySelector("#ans_header").innerHTML ="CPI : " + new_cpi.toFixed(4) +"<br>" +"SPI : " + spi.toFixed(4);
            document.getElementById("ans_header").style.display="block";
        }
    }

    function validateFields_gp()
    {
        // let cpi_vf = document.getElementById("cpi").value;
        // if(cpi_vf == "" || cpi_vf > 10 || cpi_vf < 0)
        // {
        //     alert("Please Enter Valid CPI");
        //     return false;
        // }

        let earned_gp_vf = document.getElementById("earned_gp").value;
        if(earned_gp_vf == "" || earned_gp_vf < 0)
        {
            alert("Please Enter Valid Earned Gradepoints");
            return false;
        }
        let total_credits = document.getElementById("total-credits").value;

        if(total_credits =="" || total_credits < 0 )
        {
            alert("Please Enter Valid Total Credtis");
        }

        let ptrs_class = document.getElementsByClassName("ptrs");
        
        let credits_class = document.getElementsByClassName("credits");
        for(let element of credits_class)
        {
            if(element.value == "" || element.value <2 || element.value > 5)
            {
                alert("Please Enter Valid Credits");
                return false;
            }
        }

        for(let element of ptrs_class)
        {
            if(element.value == "" || element.value < 0 || element.value > 10)
            {
                alert("Please Enter Valid Expected Pointers");
                return false;
            }
        }

        return true;
    }

    function calculateCPI_gp() {

        if (validateFields_gp()) {
            //let curr_cpi = document.getElementById("cpi").value;
            let prev_gradepts = document.getElementById("earned_gp").value;
            let credits = document.getElementById("total-credits").value;

            console.log(prev_gradepts);

            const expected_ptrs = document.getElementsByClassName("ptrs");
            const new_credits = document.getElementsByClassName("credits");

            let earned_gradepoints = 0;
            let this_sem_credits = 0;
            for (let i = 0; i <= no_of_courses - 1; i++) {
                this_sem_credits = parseFloat(this_sem_credits) + parseFloat(new_credits[i].value);
                console.log(this_sem_credits);
                
                earned_gradepoints = parseFloat(earned_gradepoints) + (parseFloat(new_credits[i].value) * parseFloat(expected_ptrs[i].value));
                console.log(earned_gradepoints);

            }
            credits = parseFloat(this_sem_credits) + parseFloat(credits);
            console.log(credits);
            let total_gradepoints = parseFloat(earned_gradepoints) + parseFloat(prev_gradepts);
            console.log(total_gradepoints);
            let new_cpi = ((total_gradepoints) / parseFloat(credits));

            let spi = ((earned_gradepoints)/parseFloat(this_sem_credits));

            document.querySelector("#ans_header").innerHTML ="CPI : " + new_cpi.toFixed(4) +"<br>" +"SPI : " + spi.toFixed(4);
            document.getElementById("ans_header").style.display="block";
        }
    }

    function addCourse() {

        if (no_of_courses <= 6) {
            no_of_courses += 1;
            const label = document.createElement("label");
            const node = document.createTextNode("Course" + no_of_courses);

            label.appendChild(node);

            let grid = document.getElementsByClassName("css-grid");
            grid[0].appendChild(label);

            let input1 = document.createElement("input");
            input1.setAttribute("type", "number");
            input1.setAttribute("class", "credits");
            grid[0].appendChild(input1);

            let input2 = document.createElement("input");
            input2.setAttribute("type", "number");
            input2.setAttribute("class", "ptrs");
            grid[0].appendChild(input2);
        }
        else {
            alert("You can maximum have 7 courses");
        }
    }

    function removeCourse() {

        if (no_of_courses > 5) {
            no_of_courses--;
            let grid = document.getElementsByClassName("css-grid");
            grid[0].lastChild.remove();
            grid[0].lastChild.remove();
            grid[0].lastChild.remove();
        }
        else {
            alert("You have to be enrolled in minimum 5 courses");
        }

    }

})
