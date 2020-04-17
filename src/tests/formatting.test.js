import { dateFormatting } from '../utils/formatting';

describe('dateFormatting()', () => {
  it('Returns new array with the date formatted', () => {
    const articles = [
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football',
        created_at: '2018-04-16T19:29:32.774Z',
        votes: 5,
        comment_count: 5,
      },
    ];
    const actual = dateFormatting(articles, 'created_at');
    expect(actual[0].created_at).toBe('16-04-2018');
  });
  it('Returns new array with the date formatted when many objects are passed in the array', () => {
    const articles = [
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football',
        created_at: '2018-04-16T19:29:32.774Z',
        votes: 5,
        comment_count: 5,
      },
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football',
        created_at: '2018-04-16T19:29:32.774Z',
        votes: 5,
        comment_count: 5,
      },
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football',
        created_at: '2020-04-16T19:29:32.774Z',
        votes: 5,
        comment_count: 5,
      },
      {
        author: 'weegembump',
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        article_id: 13,
        topic: 'football',
        created_at: '2018-04-16T19:29:32.774Z',
        votes: 5,
        comment_count: 5,
      },
    ];
    const actual = dateFormatting(articles, 'created_at');
    expect(actual[0].created_at).toBe('16-04-2018');
    expect(actual[2].created_at).toBe('16-04-2020');
  });
});
