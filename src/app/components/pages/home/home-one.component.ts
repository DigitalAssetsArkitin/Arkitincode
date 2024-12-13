import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-one',
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    teamSlides: OwlOptions = {
		loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }
    clientWrap: OwlOptions = {
		loop:true,
		margin:30,
		nav:false,
		mouseDrag: true,
		items:1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 800,
		autoplayHoverPause: true,
		center: false,
		responsive:{
			0:{
				items:1,
				margin: 10,
			},
			576:{
				items:1,
			},
			768:{
				items:2,
				margin: 20,
			},
			992:{
				items:2,
			},
			1200:{
				items:2,
			}
		}
    }

    // Accordion
    accordionItems = [
        {
            title: 'Coordinated Project Evaluation Model (CPEM)',
             content: `Arkitin’s transparent and inclusive project assessments, covering both cost and outcomes,
             will be conducted on a common platform in collaboration with the client to arrive at a
             mutually agreeable road map and costing.`,
              open: false
        },
        {
            title: 'Research Revamp Reincarnate Model (RCube)',
            content: `Arkitin always evaluates and explores the ultimatum required to meet the client’s expected
            output. We then decide to optimize the road map to incorporate the RCube framework.`,
            open: false
        },
        {
            title: 'Real Time Development & Testing (RTDT)',
            content: `Clients will receive detailed updates during development and testing, ensuring transparency
            and collaboration throughout the process.`,
            open: false
        },
        {
            title: 'Automated Deployment & Delivery (ADD)',
            content: `Arkitin eradicates the time lag between development and delivery, enabling automatic code
            deployment across various platforms. This will also help clients’ to curtail overcharging by
            service providers.`,
            open: false
        },
        {
            title: 'Life Cycle Support (LCS)',
            content: `Arkitin assures a life cycle support through a dedicated tool to track the health and
            performance of the products to avoid outages and bugs/viruses.`,
            open: false
        }
    ];
    selectedItem : any = null;
    toggleAccordionItem(item:any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}