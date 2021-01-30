"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodecg_1 = require("@/util/nodecg");
const replicants_1 = require("@/util/replicants");
nodecg_1.get().log.info('Extension code working!');
// Access/set a replicant (also see ./util/replicants).
replicants_1.exampleReplicant.value = { exampleProperty: `exampleString_Changed_${Date.now()}` };
// Access the bundle configuration with types.
const config = nodecg_1.get().bundleConfig;
// Accessing normal types.
const exampleType = { exampleProperty: 'exampleString' };
