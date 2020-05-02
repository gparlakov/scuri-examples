export interface Author {
  name: string;
}

export class AuthorService {
  name: string;

  getAuthor(id: string): Author {
    return { name: "GP" };
  }

  updateAuthor(author: Author): "success" | "error" {
    return "success";
  }
}

