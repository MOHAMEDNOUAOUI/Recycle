import { Component, OnInit } from "@angular/core";
import { Role, Utilisateur } from "../models/Utilisateur.model";
import { Demande, Statut, type_waste_recycle } from "../models/demande.model";

export const fakeUsers: Utilisateur[] = [
    {
        firstname: "Alice",
        lastname: "Smith",
        email: "alice.smith@example.com",
        password: "alice123",
        adress: "45 Baker Street, London, UK",
        phone: "+44 123 456 789",
        birthday: "1985-08-12",
        profile: new File([""], "alice.jpg"),
        role: Role.collector,
        demande:[]
    },
    {
        firstname: "Bob",
        lastname: "Johnson",
        email: "bob.johnson@example.com",
        password: "bobsecure",
        adress: "78 Park Avenue, New York, USA",
        phone: "+1 987 654 321",
        birthday: "1992-04-25",
        profile: new File([""], "bob.jpg"),
        role: Role.collector,
        demande:[]
    },
    {
        firstname: "Charlie",
        lastname: "Brown",
        email: "charlie.brown@example.com",
        password: "charliePass",
        adress: "23 Maple Street, Toronto, Canada",
        phone: "+1 647 555 1234",
        birthday: "1988-11-03",
        profile: new File([""], "charlie.jpg"),
        role: Role.collector,
        demande:[]
    },
    {
        firstname: "David",
        lastname: "Wilson",
        email: "david.wilson@example.com",
        password: "david789",
        adress: "56 Elm Road, Sydney, Australia",
        phone: "+61 400 123 456",
        birthday: "1995-06-20",
        profile: new File([""], "david.jpg"),
        role: Role.collector,
        demande:[]
    },
    {
        firstname: "Emma",
        lastname: "Garcia",
        email: "emma.garcia@example.com",
        password: "emmaPass99",
        adress: "34 Palm Avenue, Madrid, Spain",
        phone: "+34 654 987 321",
        birthday: "1990-09-10",
        profile: new File([""], "emma.jpg"),
        role: Role.collector,
        demande:[]
    }
];

export const fakeUser : Utilisateur = {
        firstname: "Emma",
        lastname: "Garcia",
        email: "emma.garcia@example.com",
        password: "emmaPass99",
        adress: "34 Palm Avenue, Madrid, Spain",
        phone: "+34 654 987 321",
        birthday: "1990-09-10",
        profile: new File([""], "emma.jpg"),
        role: Role.collector,
        demande:[]
}

// export const fakeUser : Utilisateur = {
//     firstname: "Emma",
//     lastname: "Garcia",
//     email: "emma.garcia@example.com",
//     password: "emmaPass99",
//     adress: "34 Palm Avenue, Madrid, Spain",
//     phone: "+34 654 987 321",
//     birthday: "1990-09-10",
//     profile: new File([""], "emma.jpg"),
//     role: Role.individual,
// }

export const fakeDemands: Demande[] = [
    {
        waste: [
            { statut: type_waste_recycle.plastique, poid: 5 },
            { statut: type_waste_recycle.verre, poid: 2 }
        ],
        pictures: [new File([""], "waste1.jpg")],
        poids: 7,
        collect_adress: "45 Baker Street, London, UK",
        date: new Date("2024-02-01"),
        statut: Statut.En_Attente,
        note: "Please collect ASAP",
        owner: {
            firstname: "Alice",
            lastname: "Smith",
            email: "alice.smith@example.com",
            password: "alice123",
            adress: "45 Baker Street, London, UK",
            phone: "+44 123 456 789",
            birthday: "1985-08-12",
            profile: new File([""], "alice.jpg"),
            role: Role.collector,
        }
    },
    {
        waste: [
            { statut: type_waste_recycle.metal, poid: 10 }
        ],
        pictures: [new File([""], "waste2.jpg")],
        poids: 10,
        collect_adress: "78 Park Avenue, New York, USA",
        date: new Date("2024-02-03"),
        statut: Statut.Validée,
        note: "Scrap metal ready for pickup",
        owner: {
            firstname: "Bob",
            lastname: "Johnson",
            email: "bob.johnson@example.com",
            password: "bobsecure",
            adress: "78 Park Avenue, New York, USA",
            phone: "+1 987 654 321",
            birthday: "1992-04-25",
            profile: new File([""], "bob.jpg"),
            role: Role.collector,
        }
    },
    {
        waste: [
            { statut: type_waste_recycle.papier, poid: 3 },
            { statut: type_waste_recycle.verre, poid: 4 }
        ],
        pictures: [new File([""], "waste3.jpg")],
        poids: 7,
        collect_adress: "23 Maple Street, Toronto, Canada",
        date: new Date("2024-02-05"),
        statut: Statut.En_Cours,
        note: "Some old newspapers and glass bottles",
        owner: {
            firstname: "Charlie",
            lastname: "Brown",
            email: "charlie.brown@example.com",
            password: "charliePass",
            adress: "23 Maple Street, Toronto, Canada",
            phone: "+1 647 555 1234",
            birthday: "1988-11-03",
            profile: new File([""], "charlie.jpg"),
            role: Role.collector,
        }
    },
    {
        waste: [
            { statut: type_waste_recycle.plastique, poid: 6 }
        ],
        pictures: [new File([""], "waste4.jpg")],
        poids: 6,
        collect_adress: "56 Elm Road, Sydney, Australia",
        date: new Date("2024-02-07"),
        statut: Statut.Occupée,
        note: "Plastic bottles need recycling",
        owner: {
            firstname: "David",
            lastname: "Wilson",
            email: "david.wilson@example.com",
            password: "david789",
            adress: "56 Elm Road, Sydney, Australia",
            phone: "+61 400 123 456",
            birthday: "1995-06-20",
            profile: new File([""], "david.jpg"),
            role: Role.collector,
        }
    },
    {
        waste: [
            { statut: type_waste_recycle.metal, poid: 8 },
            { statut: type_waste_recycle.papier, poid: 2 }
        ],
        pictures: [new File([""], "waste5.jpg")],
        poids: 10,
        collect_adress: "34 Palm Avenue, Madrid, Spain",
        date: new Date("2024-02-09"),
        statut: Statut.Rejetée,
        note: "Rejected due to incorrect sorting",
        owner: {
            firstname: "Emma",
            lastname: "Garcia",
            email: "emma.garcia@example.com",
            password: "emmaPass99",
            adress: "34 Palm Avenue, Madrid, Spain",
            phone: "+34 654 987 321",
            birthday: "1990-09-10",
            profile: new File([""], "emma.jpg"),
            role: Role.collector,
        }
    }
];


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './fakedata.html',
  styleUrl: './fake.css'
})
export class FakeData implements OnInit {

    constructor() {
        
    }

    ngOnInit(): void {
        localStorage.setItem('demands' , JSON.stringify(fakeDemands));
        localStorage.setItem("collectors", JSON.stringify(fakeUsers));
        localStorage.setItem('loggedUser' , JSON.stringify(fakeUser));
    }

}