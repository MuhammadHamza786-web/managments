let TotalExpenses = 0;
        let TotalIncome = 0;
        let TotalProfit = 0;
        let items = [];

        function sellItem() {
            let itemdetails = document.getElementById("Expense").value;
            let itemamount = Number(document.getElementById("Income").value);

            if (itemdetails === "" || itemamount <= 0) {
                alert("Sell ke liye valid details aur amount dalo");
                return;
            }

            let itemobject = {
                name: itemdetails,
                itemamount: itemamount,
                type: "profit"
            };

            TotalIncome += itemamount;
            items.unshift(itemobject);
            calculateProfit();
        }

        function buyItem() {
            let itemdetails = document.getElementById("Expense").value;
            let itemamount = Number(document.getElementById("Income").value);

            if (itemdetails === "" || itemamount <= 0) {
                alert("Buy ke liye valid details aur amount dalo");
                return;
            }

            let itemobject = {
                name: itemdetails,
                itemamount: itemamount,
                type: "loss"
            };

            TotalExpenses += itemamount;
            items.unshift(itemobject);
            calculateProfit();
        }

        function calculateProfit() {
            TotalProfit = TotalIncome - TotalExpenses;
            printdata();
            clearInputs();
        }

        function printdata() {
            document.getElementById("expen").innerText = TotalExpenses;
            document.getElementById("Inco").innerText = TotalIncome;
            document.getElementById("Pro").innerText = TotalProfit;

            let listitem = "";

            for (let i = 0; i < items.length; i++) {
                let Extraclass = items[i].type == "loss" ? "red" : "green";

                listitem += `
                <div class="item ${Extraclass}">
                    <h5>${items[i].name}</h5>
                    <h1>${items[i].itemamount}</h1>
                </div>
            `;
            }

            document.querySelector(".result").innerHTML = listitem;
        }

        function clearInputs() {
            document.getElementById("Expense").value = "";
            document.getElementById("Income").value = "";
        }



