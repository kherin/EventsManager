import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h2>Hello Event</h2>
            <hr>
            <h2>{{ event.name }}</h2>
            <div class="well hoverwell thumbnail">
                <h2>{{event.name}}</h2>
                <div>Date: {{event.date}}</div>
                <div>Time: {{event.time}}</div>
                <div>Price: \${{event.price}}</div>
                <div>Location: {{event.location.address}} {{ event.location.city }} {{ event.location.country }}</div>
            </div>
        </div>
    `
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England',
        }
    }
}