export interface Ticket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
  ];
}

export function compareByDuration(ticket1: Ticket, ticket2: Ticket): number {
  const firstTicketDur = ticket1.segments.reduce((a, s) => a + s.duration, 0);
  const secondTicketDur = ticket2.segments.reduce((a, s) => a + s.duration, 0);

  if (firstTicketDur === secondTicketDur) return 0;
  if (firstTicketDur < secondTicketDur) return -1;
  if (firstTicketDur > secondTicketDur) return 1;
}
