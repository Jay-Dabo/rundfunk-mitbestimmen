import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | broadcast/edit', function() {
  setupTest('route:broadcast/edit', { integration: true });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
