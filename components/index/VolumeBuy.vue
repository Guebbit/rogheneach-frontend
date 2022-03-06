<template>
  <div class="heroPanel2 centered with-shadow special-shadow dark-shadow white-text">
    <img class="background"
         :src="$config.assetUrl+'images/volumes/thumbnail/'+cover"
         :data-src="$config.assetUrl+'images/volumes/'+cover"
         :alt="title"
         :title="title"
    />
    <div class="panel-content">
      <div>
        <div class="container">
          <div class="row">
            <div class="col s12 m6 book-block">
              <div class="book4 observer-activate" ref="book">
                <div>
                  <div class="book-cover">
                    <img :src="$config.assetUrl+'images/volumes/thumbnail/'+cover"
                         :data-src="$config.assetUrl+'images/volumes/'+cover"
                         :alt="title"
                         :title="title + subtitle"
                    />
                  </div>
                  <div class="book-spine">
                    <img :src="$config.assetUrl+'images/volumes/thumbnail/'+spine"
                         :data-src="$config.assetUrl+'images/volumes/'+spine"
                         :alt="title"
                         :title="title + subtitle"
                    />
                  </div>
                </div>
              </div>

              <div class="actions-block mt-40">
                <a v-for="this_links in links"
                   class="volume-action" :class="id+'-action'"
                   :href="this_links[0]"
                   target="_blank"
                >
                  <i :class='this_links[2]'></i>
                  {{ this_links[1] }}
                </a>
              </div>

              <div :class="{active:payment_success}" class="heart paypalMessage"></div>


            </div>
            <div class="col s12 m6 info-block dark-shadow-highlight">
              <h3 class="title">{{ title }}</h3>
              <h4 class="subtitle">{{ subtitle }}</h4>
              <div class="badges">
								<span v-for="badge in badges" class="chip">
									{{ badge }}
								</span>
              </div>

              <div class="description">
								<span v-for="this_text in description">
									{{ this_text }}
								</span>
              </div>

              <div v-if="buy" class="buy-block">
                <div class="price">
                  {{ price }}
                  <span class="shipping-text">
										{{ $t('volumeBuy.buy.shipping-text') }}
									</span>
                </div>
                <paypal-checkout
                  :amount="price"
                  :currency="currency"
                  :client="credentials"
                  env="production"
                  :items="paypalItems"
                  :button-style="paypalStyle"

                  :payment-authorized="paymentAuthorized"
                  :payment-completed="paymentCompleted"
                  :payment-cancelled="paymentCancelled"

                />
              </div>
              <div v-else class="buy-block">
                <div class="price">
                  ?
                  <span class="shipping-text">
										{{ $t('volumeBuy.coming-soon') }}
									</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VolumeBuy',

  data() {
    return {
      credentials: {
        sandbox: 'AVcmXFYXEcLvdoPmwPHO_0OB369fwqmYvZsijfEGygi6r5AnQ21zgGBxXxqFVTNhAzmDyRbuNBOLA4r3',
        production: 'AdkmNvU0pcVYUhDHjyNQ6CIjXcWCgJBDtRxFzFY9fUd70OFuXYTTVlsnp_cEH_3oAfhanBQ9y4se9of4'
      },
      paypalStyle: {
        label: 'paypal',
        tagline: false,
        fundingicons: true,

        size: 'responsive',
        shape: 'pill',
        color: 'gold',
      },
      currency: "EUR",

      payment_success: false
    }
  },

  computed: {
    paypalItems: function () {
      return [
        {
          "name": this.title,
          "description": this.description.join(" "),
          "quantity": "1",
          "price": this.price,
          "currency": this.currency,
        }
      ];
    },
  },

  props: {
    id: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      default: "",
    },
    spine: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    description: {
      type: Array,
      default: () => {
        return []
      },
    },
    badges: {
      type: Array,
      default: () => {
        return []
      },
    },
    links: {
      type: Array,
      default: () => {
        return []
      },
    },
    buy: {
      type: Boolean,
      default: false,
    },
    price: {
      type: String,
      default: "0",
    },
  },

  methods: {
    paymentAuthorized() {
      this.payment_success = true;
    },
    paymentCompleted() {
      this.payment_success = true;
    },
    paymentCancelled() {
      //
    },
  },
}
</script>
