/* eslint-disable max-classes-per-file */
export default interface IPostTest {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class InfoLoading implements IPostTest {
  userId: number;
  
  id: number;
  
  title: string;
  
  body: string;
  
  constructor(titleMessage: string, bodyMessage: string) {
    this.userId = 1;
    this.id = 1;
    this.title = titleMessage;
    this.body = bodyMessage;
  }
}

export const infoLoading = new InfoLoading('', '');

export interface IPostTestComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

class InfoCommentLoading implements IPostTestComment {
  postId: number;
    
  id: number;
  
  name: string;
  
  email: string;
  
  body: string;
  
  constructor(nameMessage: string, bodyMessage: string) {
    this.postId = 1;
    this.id = 1;
    this.name = nameMessage;
    this.email = '';
    this.body = bodyMessage;
  }
}

export const infoCommentLoading = new InfoCommentLoading('', '');
