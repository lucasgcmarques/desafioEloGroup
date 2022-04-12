export function loadLists() {
    return [
      { 
        title: 'Clientes em Potencial', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Andrea Watts',
          },
          {
            id: 2,
            content: 'Tonya Delgado',
          },
          {
            id: 3,
            content: 'Mary Singleton',
          },
        ]
      },
      { 
        title: 'Dados Confirmados', 
        creatable: false,
        cards: [
          {
            id: 4,
            content: 'Mary Barry',
          }
        ]
      },
      { 
        title: 'Reunião Agendada', 
        creatable: false,
        done: true,
        cards: [
          {
            id:5,
            content: 'David Willis',
          },
          {
            id: 6,
            content: 'Jennifer Watts',
          },
          {
            id: 7,
            content: 'Sierra Golden',
          }
        ]
      },
    ];
  }