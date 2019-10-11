        ////PART1

        // 1 
        for (let i = 0; i <= 2; i++) {
            let randomNumber = Math.random().toFixed(2);
            console.log(randomNumber);
        }

        //2
        let arr = [2, 5, 6, 9, 10];

        let randomIndexInArray = Math.floor(Math.random() * arr.length);
        console.log(randomIndexInArray);

        console.log("random arr: ", arr[randomIndexInArray]);

        //3-4-5-6-7-8
        let listQuizz = [{
                question: 'How many legs does a spider have ?',
                choice: [`1. None\n`,

                    `2. 2 \n`,

                    ` 3. 8 \n`,

                    `4. 12 \n`
                ],
                answer: 1
            },

            {
                question: 'How many eyes does a spider have ?',
                choice: [`1. None\n`,

                    `2. 2 \n`,

                    ` 3. 8 \n`,

                    `4. 12 \n`
                ],
                answer: 2
            },

            {
                question: 'How many hands does a spider have ?',
                choice: [`1. None\n`,

                    `2. 2 \n`,

                    ` 3. 8 \n`,

                    `4. 12 \n`
                ],
                answer: 1
            }


        ];




        let sum = 0;
        while (listQuizz.length > 0) {
            let randomIndexInList = Math.floor(Math.random() * listQuizz.length);

            let re = Number(prompt(`${listQuizz[randomIndexInList].question} \n ${listQuizz[randomIndexInList].choice}`));
            if (re == listQuizz[randomIndexInList].answer) {
                alert('bravo');
                listQuizz.splice(randomIndexInList, 1);
                sum += 1;
            } else {
                alert(" good luck next time ^^");
                listQuizz.splice(randomIndexInList, 1);
            }

        }
        alert(' You are out of ques ');
        alert(` your correct answer is ${sum} of 3`);