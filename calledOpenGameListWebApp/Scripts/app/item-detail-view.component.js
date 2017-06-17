System.register(["@angular/core", "@angular/router", "./item.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, item_service_1, ItemDetailViewComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }
        ],
        execute: function () {
            ItemDetailViewComponent = (function () {
                function ItemDetailViewComponent(itemService, router, activatedRoute) {
                    this.itemService = itemService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                }
                ItemDetailViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.activatedRoute.snapshot.params["id"];
                    if (id) {
                        this.itemService.get(id).subscribe(function (item) { return _this.item = item; });
                    }
                    else if (id === 0) {
                        console.log("id is : switching to edit mode...");
                    }
                    else {
                        console.log("Invalid id: routing back to home...");
                        this.router.navigate([""]);
                    }
                };
                ItemDetailViewComponent.prototype.onItemDetailEdit = function (item) {
                    this.router.navigate(["item/edit", item.Id]);
                };
                return ItemDetailViewComponent;
            }());
            ItemDetailViewComponent = __decorate([
                core_1.Component({
                    selector: "item-detail-view",
                    template: "      \n    <div *ngIf=\"item\" class=\"item-container\">    \n        <div class=\"item-tab-menu\">        \n            <span (click)=\"onItemDetailEdit(item)\">Edit</span>        \n            <span class=\"selected\">View</span>    \n        </div>    \n        <div class=\"item-details\">        \n            <div class=\"mode\">Display Mode</div>        \n            <h2>{{item.Title}}</h2>        \n            <p>{{item.Description}}</p>    \n        </div> \n    </div> \n    ",
                    styles: [
                        "        \n    .item-container {    width: 600px; }\n.item-tab-menu {    margin-right: 30px; }\n.item-tab-menu span {    background-color: #dddddd;    border: 1px solid #666666;    border-bottom: 0;    cursor: pointer;    display: block;    float: right;    margin: 0 0 -1px 5px;    padding: 5px 10px 4px 10px;    text-align: center;    width: 60px; }.item-tab-menu span.selected {    background-color: #eeeeee;    cursor: auto;    font-weight: bold;    padding-bottom: 5px; }\n.item-details {    background-color: #eeeeee;    border: 1px solid black;    clear: both;    margin: 0;    padding: 5px 10px; }\n.item-details * {    vertical-align: middle; }\n.item-details .mode {    font-size: 0.8em;    color: #777777; }\n.item-details ul li {    padding: 5px 0; } \n    "
                    ]
                }),
                __metadata("design:paramtypes", [item_service_1.ItemService,
                    router_1.Router,
                    router_1.ActivatedRoute])
            ], ItemDetailViewComponent);
            exports_1("ItemDetailViewComponent", ItemDetailViewComponent);
        }
    };
});
