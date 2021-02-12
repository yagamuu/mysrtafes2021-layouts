import { v4 as uuid } from 'uuid';
import { get as nodecg } from '@/util/nodecg';
import { SetupInformationArray } from '@/types/schemas/setupInformationArray';

const informationArrayRep = nodecg().Replicant<SetupInformationArray>('setupInformationArray', {
  defaultValue: [],
});

const createInformation = (text: string): void => {
  if (!informationArrayRep.value) { return; }

  informationArrayRep.value.push({
    id: uuid(),
    text,
  });

  nodecg().log.info('Add information');
};

const deleteInformation = (id: string): void => {
  if (!informationArrayRep.value) { return; }

  informationArrayRep.value = informationArrayRep.value.filter(
    (information) => information.id !== id,
  );

  nodecg().log.info('Delete information');
};

nodecg().listenFor('createInformation', (data, ack) => {
  createInformation(data.text);

  if (ack && !ack.handled) {
    ack(null);
  }
});

nodecg().listenFor('deleteInformation', (data, ack) => {
  deleteInformation(data.id);

  if (ack && !ack.handled) {
    ack(null);
  }
});
