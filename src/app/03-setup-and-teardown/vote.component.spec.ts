import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent;
  beforeEach(() => {
     component = new VoteComponent();
  });
  it('should increment the votecount when upvotes', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement the votecount when downvotes', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});