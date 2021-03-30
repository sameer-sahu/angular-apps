import { PipeTransform, Pipe } from '@angular/core';
import { Post } from './post.data';

@Pipe({
    name: 'postFilter'
})
export class PostFilter implements PipeTransform {
    transform(posts: Post[], searchPost: number) {
        console.log(searchPost);
        if (posts.length === 0 || searchPost === undefined || searchPost === null) {
            return posts;
        }

        return posts.filter(post => post.id === searchPost);
    }
}