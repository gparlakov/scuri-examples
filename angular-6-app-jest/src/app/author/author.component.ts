import { AuthorService, Author } from './author';

export class AuthorComponent {
  author: Author;

  constructor(private s: AuthorService) {}

  ngOnInit() {
    this.author = this.s.getAuthor('1');
  }
}
