        // ////PART1

        // // 1 
        // for (let i = 0; i <= 2; i++) {
        //     let randomNumber = Math.random().toFixed(2);
        //     console.log(randomNumber);
        // }

        // //2
        // let arr = [2, 5, 6, 9, 10];

        // let randomIndexInArray = Math.floor(Math.random() * arr.length);
        // console.log(randomIndexInArray);

        // console.log("random arr: ", arr[randomIndexInArray]);

        // //3-4-5-6-7-8
        // let listQuizz = [{
        //         question: 'How many legs does a spider have ?',
        //         choice: [`1. None\n`,

        //             `2. 2 \n`,

        //             ` 3. 8 \n`,

        //             `4. 12 \n`
        //         ],
        //         answer: 1
        //     },

        //     {
        //         question: 'How many eyes does a spider have ?',
        //         choice: [`1. None\n`,

        //             `2. 2 \n`,

        //             ` 3. 8 \n`,

        //             `4. 12 \n`
        //         ],
        //         answer: 2
        //     },

        //     {
        //         question: 'How many hands does a spider have ?',
        //         choice: [`1. None\n`,

        //             `2. 2 \n`,

        //             ` 3. 8 \n`,

        //             `4. 12 \n`
        //         ],
        //         answer: 1
        //     }


        // ];




        // let sum = 0;
        // while (listQuizz.length > 0) {
        //     let randomIndexInList = Math.floor(Math.random() * listQuizz.length);

        //     let re = Number(prompt(`${listQuizz[randomIndexInList].question} \n ${listQuizz[randomIndexInList].choice}`));
        //     if (re == listQuizz[randomIndexInList].answer) {
        //         alert('bravo');
        //         listQuizz.splice(randomIndexInList, 1);
        //         sum += 1;
        //     } else {
        //         alert(" good luck next time ^^");
        //         listQuizz.splice(randomIndexInList, 1);
        //     }

        // }
        // alert(' You are out of ques ');
        // alert(` your correct answer is ${sum} of 3`);
        //____________________________________________________________________________

        ////PART2

        //   //1
        let listOfWords = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life',
            'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'
        ];
        for (let i = 0; i < listOfWords.length; i++) {
            let sum = 1;
            for (let j = i + 1; j < listOfWords.length; j++) {
                if (listOfWords[i] == listOfWords[j]) {
                    sum += 1;
                }
            }
            console.log(` ${listOfWords[i]}:${sum}\n`);
        }

        //2-3-4 
        const inventoryByBrand = {

            dell: [

                {
                    name: 'Dell XPS 9370',
                    price: 30000,
                    brand: 'Dell',
                    quantity: 1,
                },
                {
                    name: 'Dell Inspiron 3567',
                    price: 9300,
                    brand: 'Dell',
                    quantity: 12,
                },
                {
                    name: 'Dell Latitude E5450',
                    price: 8600,
                    brand: 'Dell',
                    quantity: 2,
                },
            ],
            hp: [{
                    name: 'HP Pavilion',
                    brand: 'HP',
                    price: 4000,
                    quantity: 7,
                },
                {
                    name: 'HP Envy 13aq',
                    price: 21000,
                    brand: 'HP',
                    quantity: 5,
                },
            ],
            asus: [{
                name: 'Asus Zenbook',
                brand: 'Asus',
                price: 20000,
                quantity: 4,
            }, ]


        };
        console.log(inventoryByBrand);
        // let inputBrand = prompt('Which brand:');
        // inputBrand.toLowerCase;
        // let sum = 0;
        // for (let i = 0; i < inventoryByBrand.dell.length; i++) {
        //     alert(inventoryByBrand.dell);
        //     // sum += 1;
        // }

        // if (inputBrand == inventoryByBrand.inputBrand) {
        //     
        //     
        //        
        //     }
        //     alert(`There are ${sum} generators of ' ${inputBrand.toUpperCase}' in inventory `);

        // }