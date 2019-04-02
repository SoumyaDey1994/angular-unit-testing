import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Emits totalVotes when upvote() method gets called', () => {
    let totalVotes = null;

    component.voteChanged.subscribe(tv => totalVotes = tv);

    component.upVote();
    expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
});