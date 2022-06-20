import { instanceToInstance } from 'class-transformer';

import { IEventDataResponseDTO } from '../dtos/IEventDataResponseDTO';

class EventDataMap {
  static toDTO(eventData): IEventDataResponseDTO {
    return instanceToInstance({
      id: eventData.id,
      name: eventData.name,
      days: eventData.days,
      schedules: eventData.schedule,
      hotels: eventData.hotel,
    });
  }
}

export { EventDataMap };
