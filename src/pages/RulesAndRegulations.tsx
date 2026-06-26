import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../data/config";

export default function RulesAndRegulations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Venue Guidelines | {siteConfig.name}</title>
      </Helmet>
      <main className="flex-grow w-full pt-32 pb-24 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="bg-luxury-dark/50 border border-luxury-gold/30 rounded-lg shadow-2xl w-full max-w-4xl mx-auto flex flex-col relative overflow-hidden">
          <div className="flex items-center justify-center p-6 md:p-8 border-b border-luxury-gold/20 shrink-0 text-center">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-luxury-gold uppercase tracking-widest">
              Venue Guidelines
            </h2>
          </div>
          
          <div className="p-6 md:p-12 text-luxury-cream/80 text-sm md:text-base space-y-10 font-light">
            
            <div className="text-center mb-12">
              <h3 className="font-display text-xl md:text-2xl text-luxury-cream uppercase tracking-wider mb-3">The Raj Mahaal</h3>
              <p className="text-lg">Sulekha More, Natagarh, Sodepur, Kolkata – 700113</p>
              <p className="mt-3 text-luxury-gold text-lg">Contact: 9331027787 | 6290338181 | 9681685246</p>
            </div>

            <section>
              <h4 className="text-luxury-gold text-lg font-semibold uppercase tracking-wider mb-5 border-l-2 border-luxury-gold pl-4">Booking & Payment</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li>To confirm a booking, <strong className="text-luxury-cream">25% of the total amount must be paid in advance</strong>. A receipt will be issued.</li>
                <li>The remaining balance must be cleared <strong className="text-luxury-cream">at least 30 days before the event</strong>, showing the same receipt.</li>
                <li>A <strong className="text-luxury-cream">refundable security deposit of ₹10,000</strong> must be paid. It will be returned 2 days after the event, after review.</li>
                <li>All payments must be made via QR Code or Account Payee Cheque in favour of "THE RAJ MAHAAL".</li>
              </ul>
            </section>

            <section>
              <h4 className="text-luxury-gold text-lg font-semibold uppercase tracking-wider mb-5 border-l-2 border-luxury-gold pl-4">Venue Usage & Timing</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li>The venue is booked from <strong className="text-luxury-cream">7:00 AM to 2:00 AM the next day</strong>.</li>
                <li>On the event day, show your payment receipt at 7:00 AM to collect venue materials from the caretaker.</li>
                <li>The venue and all materials <strong className="text-red-400 font-semibold">must be returned in proper condition by 2:00 AM</strong> the next morning.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-luxury-gold text-lg font-semibold uppercase tracking-wider mb-5 border-l-2 border-luxury-gold pl-4">Damages & Deductions</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-red-400 font-semibold">Any damages will be deducted from the security deposit</strong> at market rate.</li>
                <li>If you believe the charges are unfair, you may repair/replace the item within 3 days to receive your full deposit.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-luxury-gold text-lg font-semibold uppercase tracking-wider mb-5 border-l-2 border-luxury-gold pl-4">Rescheduling & Cancellation</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li>To reschedule, a written request must be submitted <strong className="text-luxury-cream">at least 2 months in advance</strong>.</li>
                <li>If the venue is rebooked on your original date, you may rebook within 18 months (subject to availability) by paying the full amount (with any applicable price updates).</li>
                <li><strong className="text-luxury-cream">Only one date change is allowed</strong>, and only if an advance payment was made.</li>
                <li>If the venue is not rebooked, <strong className="text-red-400 font-semibold">the advance is non-refundable</strong>.</li>
                <li>No excuses or recommendations will be accepted. <strong className="text-luxury-cream">The decision of the management is final.</strong></li>
              </ul>
            </section>

            <section>
              <h4 className="text-luxury-gold text-lg font-semibold uppercase tracking-wider mb-5 border-l-2 border-luxury-gold pl-4">Restrictions & Guidelines</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-red-400 font-semibold">No external event management services are allowed.</strong></li>
                <li>No outside chairs, tables, stage, or furniture — these will be provided as per your requirement by The Raj Mahaal.</li>
                <li><strong className="text-red-400 font-semibold">No DJ, sound system, or firecrackers are allowed.</strong> The main gate closes at <strong className="text-luxury-cream">12:00 AM</strong>.</li>
                <li><strong className="text-red-400 font-semibold uppercase">Smoking, alcohol, hookah, and any intoxicants are strictly prohibited</strong> inside the premises.</li>
                <li>Nails, cellotape, alta, or chemicals that stain walls/floors are <strong className="text-red-400 font-semibold">not allowed</strong>.</li>
                <li>Clay or thermocol plates, bowls, or glasses are <strong className="text-red-400 font-semibold">not allowed</strong>.</li>
                <li>No one may remain on the premises (e.g., caterers, decorators) after the event ends.</li>
                <li>Music systems outside the house are not allowed. Inside music may play <strong className="text-luxury-cream">till 10:00 PM only</strong>.</li>
                <li><strong className="text-luxury-cream">Only commercial LPG is permitted</strong> for cooking.</li>
              </ul>
            </section>

            <section>
              <h4 className="text-luxury-gold text-lg font-semibold uppercase tracking-wider mb-5 border-l-2 border-luxury-gold pl-4">Special Notes</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li>If you use drums or music after 10:30 PM (except for wedding rituals), <strong className="text-luxury-cream">prior written permission from the local administration must be submitted</strong>. If the authorities stop the event, the owner will not be responsible.</li>
                <li>In case of natural disasters or mechanical failures, the management is not liable.</li>
                <li><strong className="text-red-400 font-semibold">No outside electricians are allowed.</strong></li>
                <li>AC usage is allowed for 6 hours. Beyond that, <strong className="text-red-400 font-semibold">you'll be charged ₹3,000/hour</strong>. Our management will keep track of it.</li>
                <li>Additional electric points cost ₹100 each.</li>
                <li>All vehicles (bicycles, motorbikes, cars) are your own responsibility.</li>
                <li>Management is not responsible for any antisocial activity.</li>
                <li>If another event is scheduled the next day, <strong className="text-red-400 font-semibold">both floors must be vacated by 2:00 AM</strong>.</li>
                <li>On entry, inspect all items and understand the rules. Before leaving, return all items to the caretaker properly.</li>
                <li>The number of people staying after 1:00 AM must be informed on the morning of the event.</li>
                <li>Charges for flowers, lights, and decoration must be <strong className="text-luxury-cream">fully paid by 6:00 PM</strong> on the event day.</li>
                <li>Charges for external lighting and electric usage will be additional.</li>
              </ul>
            </section>
            
          </div>
        </div>
      </main>
    </>
  );
}
