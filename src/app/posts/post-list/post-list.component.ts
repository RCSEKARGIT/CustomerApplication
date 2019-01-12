import { Component, Input } from '@angular/core';

@Component({
selector: 'post-list',
templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
//posts = [
//    {title: "firstpost", content: "This is first post"},
//    {title: "secondpost", content: "This is second post"},
//    {title: "thirdtpost", content: "This is third post"}
//];

@Input() posts = [];
}
