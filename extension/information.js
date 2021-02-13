"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const nodecg_1 = require("@/util/nodecg");
const informationArrayRep = nodecg_1.get().Replicant('setupInformationArray', {
    defaultValue: [],
});
const createInformation = (text) => {
    if (!informationArrayRep.value) {
        return;
    }
    informationArrayRep.value.push({
        id: uuid_1.v4(),
        text,
    });
    nodecg_1.get().log.info('Add information');
};
const updateInformation = (information) => {
    if (!informationArrayRep.value) {
        return;
    }
    const informationIndex = informationArrayRep.value.findIndex((informationRep) => informationRep.id === information.id);
    if (informationIndex < -1) {
        return;
    }
    informationArrayRep.value[informationIndex] = information;
    nodecg_1.get().log.info('Update information');
};
const deleteInformation = (id) => {
    if (!informationArrayRep.value) {
        return;
    }
    informationArrayRep.value = informationArrayRep.value.filter((information) => information.id !== id);
    nodecg_1.get().log.info('Delete information');
};
nodecg_1.get().listenFor('createInformation', (data, ack) => {
    createInformation(data.text);
    if (ack && !ack.handled) {
        ack(null);
    }
});
nodecg_1.get().listenFor('updateInformation', (data, ack) => {
    updateInformation(data);
    if (ack && !ack.handled) {
        ack(null);
    }
});
nodecg_1.get().listenFor('deleteInformation', (data, ack) => {
    deleteInformation(data.id);
    if (ack && !ack.handled) {
        ack(null);
    }
});
