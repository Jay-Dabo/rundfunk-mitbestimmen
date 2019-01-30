import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | 404', function() {
  setupTest('route:404', {
    needs: [
      'service:metrics',
      'service:fastboot',
      'ember-metrics@metrics-adapter:piwik' // bundled adapter
    ]
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
