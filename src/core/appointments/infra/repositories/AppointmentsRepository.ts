import { Repository } from 'typeorm';

import { ICreateAppointmentDTO } from '@core/appointments/dtos';
import { IAppointmentsRepository } from '@core/appointments/repositories';
import { IBuyerHotelExhibitorResponseDTO } from '@core/buyerHotelExhibitor/dtos/IBuyerHotelExhibitorResponseDTO';
import { IEventDataResponseDTO } from '@core/eventData/dtos/IEventDataResponseDTO';
import { Appointment } from '@entity/Appointment';
import { Buyer } from '@entity/Buyer';
import { Exhibitor } from '@entity/Exhibitor';
import { Hotel } from '@entity/Hotel';
import appDataSource from '@infra/database/AppDataSource';
import { AppError } from '@infra/errors';

class AppointmentsRepository implements IAppointmentsRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = appDataSource.getRepository(Appointment);
  }

  async create(
    buyers: Buyer[],
    exhibitors: Exhibitor[],
    eventData: IEventDataResponseDTO
  ): Promise<void> {
    const totalDay = 3;
    const event_day = [19, 19, 17];
    const appointments: ICreateAppointmentDTO[] = [];
    const dayModifier = 0;
    let listOfBuyers = buyers;
    let listOfBuyers2;
    const hotels = [
      {
        name: 'Hotel A',
        email: 'hotela@hotela.com',
        totalTable: 41,
      },
      {
        name: 'Hotel B',
        email: 'hotelb@hotelb.com',
        totalTable: 52,
      },
      {
        name: 'Hotel C',
        email: 'hotelc@hotelc.com',
        totalTable: 23,
      },
    ];
    const positionModifier = 1;
    for (let countDay = 0; countDay < 3; countDay += 1) {
      if (countDay === 1) {
        listOfBuyers = this.day1(buyers);
        listOfBuyers2 = listOfBuyers;
      }

      if (countDay === 2) {
        listOfBuyers = this.day2(buyers);
      }

      for (
        let countEventDay = 1;
        countEventDay <= event_day[countDay];
        countEventDay += 1
      ) {
        for (
          let countExhibitor = 0;
          countExhibitor < exhibitors.length;
          countExhibitor += 1
        ) {
          const appointment = {
            exhibitor_id: exhibitors[countExhibitor].id,
            buyer_id: listOfBuyers[countExhibitor].id,
          };
          appointments.push(appointment);
        }
        listOfBuyers = this.moveBuyerInHotel(listOfBuyers, hotels);
      }
    }
    // for (let day = 0; day <= totalDay; day += 1) {
    //   if (day === 1) {
    //     listOfBuyers = this.day1(listOfBuyers);
    //     listOfBuyers2 = listOfBuyers;
    //   }

    //   if (day === 2) {
    //     listOfBuyers = this.day1(listOfBuyers2);
    //     for (let count = 0; count <= listOfBuyers.length; count += 1) {
    //       console.log(listOfBuyers[count]);
    //     }
    //   }
    //   for (let i = 1; i <= event_day[day]; i += 1) {
    //     for (let idExhibitor = 1; idExhibitor <= 116; idExhibitor += 1) {
    //       if (positionModifier !== i) {
    //         listOfBuyers = this.moveBuyerInHotel(listOfBuyers, hotels);

    //         positionModifier = i;
    //       }
    //       positionModifier = i;

    //       const appointment = {
    //         exhibitor_id: idExhibitor,
    //         buyer_id: listOfBuyers[idExhibitor - 1].id,
    //       };

    //       appointments.push(appointment);
    //       // const appointmentExist = this.appointmentExist(
    //       //   appointments,
    //       //   idExhibitor,
    //       //   listOfBuyers[idExhibitor - 1].id
    //       // );

    //       // if (appointmentExist) {
    //       //   throw new AppError('appointments_duplicated');
    //       // }
    //     }
    //   }
    // }

    appDataSource.transaction(async (transaction) => {
      const appointmentRepository = this.repository.create(appointments);
      transaction.save(appointmentRepository);
    });
  }
  private moveBuyerInHotel(listOfBuyers, listOfHOtels) {
    const tableValue = listOfHOtels.map((hotel) => hotel.totalTable);
    let sumTable = 0;
    let positionInitialTable = 0;

    for (let qtdTable = 0; qtdTable < tableValue.length; qtdTable += 1) {
      sumTable += tableValue[qtdTable];

      const buyer = listOfBuyers[sumTable - 1];

      listOfBuyers.splice(sumTable - 1, 1);

      listOfBuyers.splice(positionInitialTable, 0, buyer);

      positionInitialTable += tableValue[qtdTable];
    }

    return listOfBuyers;
  }
  private day1(listOfBuyers) {
    const CORTE_1 = listOfBuyers.slice(90, 116);
    const CORTE_2 = listOfBuyers.slice(0, 90);

    return [...CORTE_1, ...CORTE_2];
  }
  private day2(listOfBuyers) {
    const buyers = this.day1(listOfBuyers);
    const CORTE_1 = buyers.slice(90, 116);
    const CORTE_2 = buyers.slice(0, 90);

    return [...CORTE_1, ...CORTE_2];
  }
  private appointmentExist(
    listOfAppointments,
    idExhibitor: number,
    idBuyer: number
  ) {
    // eslint-disable-next-line no-restricted-syntax
    for (const appointment of listOfAppointments) {
      if (
        appointment.idExhibitor === idExhibitor &&
        appointment.idBuyer === idBuyer
      ) {
        return true;
      }
    }
    return false;
  }
}

export { AppointmentsRepository };
