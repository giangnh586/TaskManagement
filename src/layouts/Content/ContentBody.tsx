import Board from 'react-trello';
// import data from './data.json';


const ContentBody = () => {
  const list = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '0/2',
        cards: [
          {
            id: 'Card1',
            title: 'Write Blog',
            description: 'Can AI make memes',
            label: '30 mins',
            draggable: false
          },
          {
            id: 'Card2',
            title: 'Pay Rent',
            description: 'Transfer via NEFT',
            label: '5 mins',
            metadata: { sha: 'be312a1' }
          },
          {
            id: 'Milk',
            title: 'Buy milk',

            description: '2 Gallons of milk at the Deli store'
          }
        ]
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
  };

  

  return (
    <div className="h-[calc(100vh-148px)] ">
      {/* <Board className=" h-full bg-transparent" data={data} draggable /> */}
      <Board
        className=" h-full "
        data={list}
        draggable
        editable
        canAddLanes
        style={{
          backgroundColor: 'transparent'
        }}
        addLaneTitle="Add Column"
        addCardTitle="Add Item"
      />
    </div>
  );
};

export default ContentBody;
