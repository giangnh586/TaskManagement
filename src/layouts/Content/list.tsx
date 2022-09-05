export const cards = [
    // {
    //   icon: "assets/icons/calendar.svg",
    //   label: "Leave >",
    //   link: "/dashboardLeave",
    // },
    // {
    //   icon: "assets/icons/edit.svg",
    //   label: "Claims >",
    //   link: "/transport",
    // },
    {
      lanes: [
        {
          id: 'lane1',
          title: 'Planned Tasks',
          
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
    }
  ];

//   <div className="flex justify-between mt-7">
//         {cards.map((card) => (
//           <div className="w-[calc((100%/2)-1rem)]">
//             <Link to={card.link}><IconCard card={card} className="mr-2" /></Link>
//           </div>
//         ))}
//       </div>