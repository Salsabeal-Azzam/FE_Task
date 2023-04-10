import { Component } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent {
[x: string]: any;

  constructor(private _DealsService:DealsService){}
  deals:[]=[];
  focusValues:any[]=[];
  potentialValues:any[]=[];
  contactMadeValues:any[]=[];
  offerSentValues:any[]=[];
  gettingReady:any[]=[];
  pinPotential:number=0;
  pinPotentialArray:number[]= [];
  pinFocus:number=0;
  pinFocusArray:number[]= [];
  pinContactMade:number=0;
  pinContactMadeArray:number[]= [];
  pinOfferSent:number=0;
  pinOfferSentArray:number[]= [];
  pinGettingReady:number=0;
  pinGettingReadyArray:number[]= [];

  testPrecenage:number = 95;

  term ='';

  ngOnInit(): void {

    this._DealsService.getAllDeals().subscribe({
      next:(res)=>{
        console.log(res);
        this.deals = res;
        console.log(this.deals);
        // Potential Value
        this.potentialValues = this.deals.filter(obj=>obj["status"] == "Potential Value");
        this.changePinPotential();

        //Focus
        this.focusValues = this.deals.filter(obj=>obj["status"] == "Focus");
        this.changePinFocus();

        //Contact Made
        this.contactMadeValues = this.deals.filter(obj=>obj["status"] == "Contact Made");
        this.changePinContactMade();


        //Offer Sent
        this.offerSentValues = this.deals.filter(obj=>obj["status"] == "Offer Sent");
        this.changePinOfferSent();

        //Getting Ready
        this.gettingReady = this.deals.filter(obj=>obj["status"] == "Getting Ready");
        this.changePinGettingReady();



      },
      error:(err)=>{console.log(err);
      }
    })
  }

  changePinPotential(){
    this.pinPotentialArray = this.potentialValues.filter(obj=>obj.pin);
    this.pinPotential = this.pinPotentialArray.length;
  }
  changePinFocus(){
    this.pinFocusArray = this.focusValues.filter(obj=>obj.pin);
    this.pinFocus = this.pinFocusArray.length;
  }

  changePinContactMade(){
    this.pinContactMadeArray = this.contactMadeValues.filter(obj=>obj.pin);
    this.pinContactMade = this.pinContactMadeArray.length;
  }

  //OfferSent
  changePinOfferSent(){
    this.pinOfferSentArray = this.offerSentValues.filter(obj=>obj.pin);
    this.pinOfferSent = this.pinOfferSentArray.length;
    console.log(this.pinOfferSent);

  }


    //Getting Ready
    changePinGettingReady(){
      this.pinGettingReadyArray = this.gettingReady.filter(obj=>obj.pin);
      this.pinGettingReady = this.pinGettingReadyArray.length;
    }
    switchFinction(status:string){
      switch (status) {
        case "Potential Value":
         this.changePinPotential();
        break;
        case "Focus":
          this.changePinFocus();
        break;
        case "Contact Made":
          this.changePinContactMade();
        break;
        case "Offer Sent":
          this.changePinOfferSent();
        break;
        case "Getting Ready":
          this.changePinGettingReady();
        break;
       }
    }
  addPin(id:number , item:any , status:string){
     item.pin = true;
     console.log(item);
     this.switchFinction(status)
     this._DealsService.updateStatus(id ,item).subscribe({
      next:(res)=>{
        console.log(res);


      },
      error:err=>{console.log(err);
      }
     })
  }

  removePin(id:number , item:any ,status:string){
    item.pin = false;
    console.log(item);
    this.switchFinction(status)
    this._DealsService.updateStatus(id ,item).subscribe({
     next:(res)=>{
       console.log(res);

     },
     error:err=>{console.log(err);
     }
    })



  }


   drop(event: CdkDragDrop<string[]>,stat:string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(event.container.data[event.currentIndex]);
      const item =event.container.data[event.currentIndex];

      this.updateOldStatusPin(item);
      this.moveDeal(item,stat);
      this.switchFinction(stat)
    }

  }


  //to update number of deal in pin status
  updateOldStatusPin(item:any){
    this.switchFinction(item.status);
  }
  //transform deal from 
  moveDeal(item:any ,status:string){
    // console.log(event);
    console.log(item , status);
    

    item.status = status;
    console.log({bellaTest:item.status});
    const id = item.id;
    this._DealsService.updateStatus(id,item).subscribe({
      next:(res)=>{
        console.log(res);

      },
      error:err=>{console.log(err);
      }
    });


  }


}



