// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
// creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.



$(document).ready(function() {

// Creo un oggetto che rappresenta uno studente:

    var student = {

        'Name': 'Claudio',
        'Surname': 'Borromeo',
        'Age': '26',

    };

// Con un ciclo for in stampo a schermo le sue proprietà

    for (var i = 0; i < student.length; i++) {
        array[i]
    };

    for (var key in student) {

        $('.first-student').append([key] + ': ');
        $('.first-student').append(student[key] + ' | ');

    };

    var students = [

        {
            'Name' : 'Mario',
            'Surname' : 'Rossi',
            'Age' : '23',
        },

        {
            'Name' : 'Paolo',
            'Surname' : 'Bianchi',
            'Age' : '30',
        },

        {
            'Name' : 'Maria',
            'Surname' : 'Neri',
            'Age' : '33',
        },

        {
            'Name' : 'Francesca',
            'Surname' : 'Verdi',
            'Age' : '19',
        },

    ];



// Creo 3 prompt in cui chiedo all'utente nome cognome ed età

    var userName = prompt('Inserisci il nome di uno studente');

    var userSurname = prompt('Inserisci il cognome di uno studente');

    var userAge = prompt('Inserisci l\'età di uno studente');

// Versione con push

    students.push({
        'Name' : userName,
        'Surname' : userSurname,
        'Age' : userAge,
    })

// Versione con quello che abbiam studiato in classe

    students.Name = userName;
    students.Surname = userSurname;
    students.Age = userAge;

    console.log(students);

    // Creo un ciclo for, dove scorro ogni singolo oggetto dell'array students

        for (var i = 0; i < students.length; i++) {

    // Variabile di supporto per selezionare un singolo oggetto dell'array
            var currentStudent = students[i];

            for (var key in currentStudent) {

    // Se la variabile "key" è uguale alla proprietà "Name" o "Surname" stampo in pagina
                if (key == 'Name') {

                        $('.other-student').append('<p class="margin-top-20">' + key + ': ' + currentStudent['Name'] + '</p>');

                } else if (key == 'Surname') {

                    $('.other-student').append('<p>' + key + ': ' + currentStudent['Surname'] + '</p>');

                }
            }


        }


});
