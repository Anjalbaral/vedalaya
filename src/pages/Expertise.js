import React from "react";
import expertisecover from "../assets/images/productscover2.jpg";
import { Parallax } from "react-parallax";
import { IoSettingsOutline } from "react-icons/io5";
import residental1 from "../assets/images/residental1.jpg";
import residental2 from "../assets/images/residental2.jpg";
import residental3 from "../assets/images/residental3.jpg";
import residental4 from "../assets/images/residental4.jpg";

import commercial1 from "../assets/images/commercial1.jpg";
import commercial2 from "../assets/images/commercial2.jpg";
import commercial3 from "../assets/images/commercial3.jpg";
import commercial4 from "../assets/images/commercial4.jpg";
import commercial5 from "../assets/images/commercial5.jpg";

import industrial1 from "../assets/images/industrial1.jpg";
import industrial2 from "../assets/images/industrial2.jpg";
import industrial3 from "../assets/images/industrial3.jpg";
import { Link } from "react-router-dom";
import newconst from "../assets/images/newconst.jpg";

const Expertise = () => {
	return (
		<div className="expertise">
			<Parallax
				className="cover-parent"
				style={{ minWidth: "100%" }}
				blur={{ min: 0, max: 0 }}
				strength={200}
				bgClassName="parallexComp"
				bgImageStyle={{ width: "100%", backgroundSize: "100%", backgroundPosition: "cover" }}
				bgImage={expertisecover}
			>
				<div className="expertise__cover">
					<div className="expertise__cover__overlay"></div>
					<div className="expertise__cover__content">
						<h3>Our Expertise</h3>
						<span>fields we expertise on</span>
					</div>
				</div>
			</Parallax>
			<div className="expertise__sectionA">
				<div className="expertise__sectionA__header">Modern & Innovative Construction Solutions</div>
				<div className="separator"></div>
				<div className="expertise__sectionA__sub-header">
					Vedalaya Group has the expertise to handle all types of construction projects. Construction projects can take many different forms, depending on the needs and goals of the project.{" "}
				</div>
				<div className="expertise__sectionA__items">
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">New construction</div>
							<div className="expertise__sectionA__items__item__content__body">
								It refers to projects focused on creating a new building from scratch. This often involves complex engineering and planning efforts to ensure that the final structure meets all
								necessary safety and building codes. Some examples of new construction projects include commercial buildings, housing complexes, or even entire cities.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Restoration and rehabilitation</div>
							<div className="expertise__sectionA__items__item__content__body">
								These projects typically involve restoring an existing structure to its original condition or making changes to allow it to be used for a new purpose. For example, a historic building
								might be restored in order to preserve its architectural integrity, or an abandoned factory might be rehabilitated into a new office complex.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Adaptive Reuse</div>
							<div className="expertise__sectionA__items__item__content__body">
								It is another type of construction project that involves repurposing an existing structure for a new use. This might involve something as simple as converting an old warehouse into
								apartments, or it could involve more drastic changes, such as turning a decommissioned power plant into a museum.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Green building</div>
							<div className="expertise__sectionA__items__item__content__body">
								It is another common type of construction project that focuses on creating structures that are environmentally friendly and sustainable. This might involve using recycled materials,
								incorporating renewable energy sources, or employing energy-efficient design features.
							</div>
						</div>
					</div>
					<div className="expertise__sectionA__items__item">
						<div className="expertise__sectionA__items__item__content">
							<div className="expertise__sectionA__items__item__content__top-separator">
								<IoSettingsOutline />
							</div>
							<div className="expertise__sectionA__items__item__content__header">Demolition</div>
							<div className="expertise__sectionA__items__item__content__body">
								It involves tearing down an existing structure in order to make way for something new. This might be necessary when a building is no longer functional or safe, or it might simply be
								part of a larger development plan that involves rebuilding the area from scratch. Regardless of the reasons behind a demolition project, it is an important and often necessary stage in
								many construction projects.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="expertise__sectionB">
				<div className="expertise__sectionB__header">Modern and Innovative UPVC Solutions</div>
				<div className="separator"></div>
				<div className="expertise__sectionB__sub-header">
					UPVC is a versatile material that is ideal for use in a wide range of construction applications in Nepal. Its creative design, durability, and cost-effectiveness make it the perfect choice
					for both residential, commercial, and industrial projects.
				</div>
				<div className="expertise__sectionB__residental">
					<div className="expertise__sectionB__residental__left">
						<div className="residental-image" style={{ backgroundImage: `url(${residental1})` }}></div>
						<div className="residental-image" style={{ backgroundImage: `url(${residental2})` }}></div>
						<div className="residental-image" style={{ backgroundImage: `url(${residental3})` }}></div>
						<div className="residental-image" style={{ backgroundImage: `url(${residental4})` }}></div>
					</div>
					<div className="expertise__sectionB__residental__right">
						<div className="expertise__sectionB__residental__right__header">Residental</div>
						<div className="expertise__sectionB__residental__right__separator"></div>
						<div className="expertise__sectionB__residental__right__content">
							<ul>
								<li>
									<span>Door and window frames:</span>
									<br /> UPVC doors and windows are made of unplasticized polyvinyl chloride, a type of plastic. UPVC is a durable, strong, weather-resistant material ideal for doors and windows. UPVC
									doors and windows are available in various designs, colors, and sizes to suit your home décor. UPVC doors and windows are easy to install and require very little maintenance. UPVC
									doors and windows are also energy efficient as they help keep your home warm in winter and cool in summer.
								</li>
								<li>
									<span>Guttering:</span>
									<br /> UPVC guttering is an excellent choice for residential projects due to its many benefits. It is a low-maintenance option that is easy to install and available in various colors
									to match your home's exterior. UPVC guttering is also durable and will not rust or rot, making it a long-lasting investment for your home.
								</li>
								<li>
									<span>Cladding:</span>
									<br /> UPVC cladding is an excellent choice for residential projects. It is durable, low maintenance, and provides good insulation against heat and sound. UPVC cladding is also an
									eco-friendly choice made from recycled materials.
								</li>
								<li>
									<span>Exterior doors and windows:</span>
									<br /> UPVC doors and windows also provide excellent insulation, keeping your home cooler in summer and warmer in winter. UPVC doors and windows are available in various styles and
									designs to suit any home and can be custom-made to order. UPVC is also an environmentally friendly material, as it is recyclable and does not release harmful toxins into the
									atmosphere.
								</li>
								<li>
									<span>Shower enclosures and bathtubs:</span>
									<br /> UPVC shower enclosures and bathtubs are commonly used in residential projects. They offer several advantages over traditional materials such as wood or metal. UPVC is a strong
									and durable material resistant to water damage and corrosion. It is also easy to clean and maintain. UPVC shower enclosures and bathtubs can be found in various styles and designs to
									suit any home.
								</li>
								<li>
									<span>Skylights:</span>
									<br /> Skylights are a great way to add natural light to a room, and they can be especially useful in rooms that don't have a lot of windows. UPVC skylights are a popular choice for
									residential projects because they are energy efficient and low maintenance.
								</li>
								<li>
									<span>Canopies, awnings, and signage:</span>
									<br /> UPVC canopies are a great way to add an extra layer of protection from the sun and rain. They can be used to create a sheltered area outside the home, which can be used to
									entertain or simply relax. Awnings made from UPVC can also be used to create a sheltered area outside of the home. This can be used for many different activities such as BBQs,
									parties, or simply relaxing in the garden. UPVC signage is also very versatile and can be used to create a unique and eye-catching display outside of the home.{" "}
								</li>
								<li>
									<span>Housings and enclosures:</span>
									<br /> UPVC Housings and enclosures offer a wide range of benefits for residential projects. They are durable, weather-resistant, and require little maintenance. UPVC Housings and
									enclosures can also create unique designs that will add value to your home. They are available in various sizes and designs to suit any need and budget.
								</li>
								<li>
									<span>Fencing, balustrade, railings, and gates:</span>
									<br /> UPVC fencing is a great way to improve the security and appearance of your home. It can be used to enclose gardens, patios, driveways, and other areas of your property. UPVC
									fencing is also an excellent way to keep children and pets safe. Balustrades and railings made from UPVC are a great way to add style and safety to your home. They can be used on
									stairs, balconies, decks, and other areas that risk falling. Finally, gates made from UPVC are a great way to improve the security of your home. They can be used to secure driveways,
									gardens, and other areas of your property.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="divider"></div>
				<div className="expertise__sectionB__commercial">
					<div className="expertise__sectionB__commercial__left">
						<div className="expertise__sectionB__commercial__left__header">Commercial</div>
						<div className="expertise__sectionB__commercial__left__separator"></div>
						<div className="expertise__sectionB__commercial__left__content">
							<ul>
								<li>
									<span className="pb-1">Entrance doors and gates:</span>
									UPVC entrance doors and gates are an ideal choice for commercial projects. UPVC is a strong and durable material that will provide a high level of security for your premises. UPVC
									doors and gates are also low maintenance, meaning they will not require regular painting or staining like wooden doors. UPVC is also available in various styles to suit the specific
									needs of your project.
								</li>
								<li>
									<span className="pb-1">Interior doors and partitions:</span>
									UPVC interior doors and partitions are an excellent choice for commercial projects where a high level of durability and fire resistance is required. They are also a popular choice
									for schools and hospitals due to their low maintenance costs and easy cleanability. UPVC doors and partitions are available in various styles and designs to suit the specific needs
									of any commercial project. In addition, they can be supplied pre-finished or unfinished, allowing for a range of different finishes.
								</li>
								<li>
									<span className="pb-1">Partitions and wall cladding:</span>
									UPVC partitions and wall cladding are extremely versatile and can be used in various commercial projects. They are tough, durable, and easy to maintain, ideal for busy environments.
									UPVC partitions and wall cladding can create clear divisions between areas in a commercial setting, such as between office spaces or in retail environments. They are also perfect for
									use in food preparation areas, as they can be easily cleaned and are resistant to bacteria. UPVC partitions and wall cladding can also create an acoustic barrier, helping to reduce
									noise levels in a busy environment. They are also fire-resistant, making them ideal for use in public areas such as hotels and restaurants.
								</li>
								<li>
									<span className="pb-1">Soffit and fascia boards:</span>
									These products are often installed along the edge of a roofline and can provide an excellent finish while protecting the roof's edges from damage.There are many uses for UPVC soffit
									and fascia boards in commercial projects. They can be used to create various looks, including a clean, modern look or a more traditional look. UPVC soffit and fascia boards can be
									used to cover up existing structures or to create new ones. UPVC soffit and fascia boards are a great choice for commercial projects because they are low maintenance and durable.
									They will not rot, warp, or crack as wood boards can. UPVC soffit and fascia boards are also easy to install. They are easy to install and maintain and last for many years with
									minimal repairs.
								</li>
								<li>
									<span className="pb-1">Guttering:</span>
									Guttering is essential for any building to collect rainwater and prevent it from causing damage. It is available in a wide range of different styles and colors, so it can be easily
									matched to the rest of the building. UPVC guttering can be used in various commercial projects, from office buildings to shopping centers. It is a popular choice for new build and
									refurbishment projects due to its durability, low maintenance, and fire safety properties. UPVC guttering is also a popular choice for schools and other public buildings, as it is
									non-toxic and does not rust or corrode.
								</li>
								<li>
									<span className="pb-1">Housings and enclosures:</span>
									UPVC housings and enclosures are commonly used in commercial projects for a variety of purposes. For example, they can be used to protect electrical components from weather and
									environmental damage, create secure storage areas for tools and equipment, or provide a safe and durable workspace for employees. UPVC housings and enclosures are also often used to
									create environmental control systems, such as food processing facilities.
								</li>
								<li>
									<span className="pb-1">Window systems:</span>
									UPVC windows are a popular choice for commercial projects, as they offer a number of benefits over other window materials. UPVC is durable and requires little maintenance, ideal for
									busy commercial environments. UPVC windows are also good at insulating against noise and heat, which can be important in a busy office or retail space.
								</li>
								<li>
									<span className="pb-1">Fencing, balustrade, railings, and gates:</span>
									Commercial projects often require fencing, balustrades, railings, and gates that are durable and stylish. UPVC is a great option for commercial applications because it is strong and
									weather-resistant. UPVC fencing, balustrades, railings, and gates can add a touch of class to any commercial project. UPVC fencing, balustrades, railings, and gates are available in
									various styles to suit any commercial project. UPVC is a strong and durable material that is weather-resistant, making it ideal for commercial applications.
								</li>
							</ul>
						</div>
					</div>
					<div className="expertise__sectionB__commercial__right">
						<div className="residental-image" style={{ backgroundImage: `url(${commercial1})` }}></div>
						<div className="residental-image" style={{ backgroundImage: `url(${commercial2})` }}></div>
						<div className="residental-image" style={{ backgroundImage: `url(${commercial3})` }}></div>
						<div className="residental-image" style={{ backgroundImage: `url(${commercial4})` }}></div>
						<div className="residental-image" style={{ backgroundImage: `url(${commercial5})` }}></div>
					</div>
				</div>
				<div className="divider"></div>
				<div className="expertise__sectionB__industrial">
					<div className="expertise__sectionB__industrial__left">
						<div className="industrial-image" style={{ backgroundImage: `url(${industrial1})` }}></div>
						<div className="industrial-image" style={{ backgroundImage: `url(${industrial2})` }}></div>
						<div className="industrial-image" style={{ backgroundImage: `url(${industrial3})` }}></div>
						<ul>
							<li>
								<span>Control panels:</span>
								<br /> UPVC control panels are used in a variety of industries and projects. They are easy to clean and maintain, making them a popular choice for food processing and other clean-room
								applications. UPVC control panels are also popular in the construction industry. They are often used as cladding on buildings and as siding for homes. UPVC control panels are known for
								their durability, weather resistance, and low maintenance requirements, making them ideal for these applications.
							</li>
							<li>
								<span>Electrical enclosures:</span>
								<br /> UPVC electrical enclosures can be used in a variety of industrial applications. For example, they are often used to protect equipment from the elements and provide a safe
								environment for workers. Enclosures can also be used to control noise levels and reduce the risk of fire. They can be purchased as pre-assembled units or as kits that can be customized
								to meet the project's specific needs.
							</li>
							<li>
								<span>Tanks, vessels, and process lines:</span>
								<br /> UPVC tanks, vessels, and process lines have a wide range of uses in industrial projects. They are commonly used to store or transport liquids or gases but can also be used for
								other purposes such as separators, heat exchangers, or holding tanks.
							</li>
							<li>
								<span>Chemical storage tanks:</span>
								<br /> UPVC chemical storage tanks are used in a variety of industrial projects, from small-scale operations to large-scale refineries. Chemical tanks can store both hazardous and
								non-hazardous liquids and gases. They are often used to store chemicals that will be used in the manufacturing process and those that will be sold to customers. There are a number of
								benefits to using UPVC chemical storage tanks. They are durable and can withstand the rigors of the industrial environment. They are also corrosion-resistant, which makes them ideal
								for storing chemicals that may be corrosive. In addition, they are easy to clean and maintain, making them an ideal choice for those who need to store chemicals for a long period.
							</li>
							<li>
								<span>Acid waste disposal systems:</span>
								<br /> Acid waste disposal systems are commonly used in industrial projects, particularly in the chemical and pharmaceutical industries. They are designed to safely and effectively
								dispose of acidic wastes, which can be corrosive and dangerous if not properly managed. UPVC acid waste disposal systems are made from a strong and durable material resistant to
								corrosion. This makes them an ideal choice for disposing of corrosive wastes. They are also easy to install and require little maintenance, making them a cost-effective option for
								industrial projects.
							</li>
							<li>
								<span>Canopies, awnings, and signage:</span>
								<br />
								UPVC canopies, awnings, and signage are commonly used in industrial projects due to their durability and low maintenance. Canopies can provide shading and protection from the elements
								for workers and equipment, while awnings can be used to advertise and brand the project site. Signage can be used to clearly mark boundaries and exits and provide information about the
								project.
							</li>
							<li>
								<span>Housings and enclosures:</span>
								<br />
								UPVC housings and enclosures are used in various industrial applications, from food processing and pharmaceuticals to electronics and automotive manufacturing. They offer many benefits
								over traditional materials such as metal or glass, including superior durability, chemical resistance, and cost-effectiveness. In addition, UPVC is an excellent insulator of both heat
								and sound, making it ideal for use in noisy or temperature-sensitive environments.
							</li>
						</ul>
					</div>
					<div className="expertise__sectionB__industrial__right">
						<div className="expertise__sectionB__industrial__right__header">Industrial</div>
						<div className="expertise__sectionB__industrial__right__separator"></div>
						<div className="expertise__sectionB__industrial__right__content">
							<ul>
								<li>
									<span>Pipe systems and valves:</span>
									<br /> UPVC pipe systems and valves are used extensively in industrial projects due to their flexibility, resistance to corrosion, and non-toxic nature. They are ideal for use in
									corrosive environments and can be used to transport aggressive fluids without fear of contamination. UPVC valves are also very durable and can withstand high temperatures and
									pressures.
								</li>
								<li>
									<span>Guttering:</span>
									<br /> UPVC guttering is an excellent choice for industrial projects because of its many benefits. Its durability and low maintenance make it ideal for use in industrial settings. In
									addition, UPVC guttering is available in various colors to match the industrial project's needs. Its ability to resist corrosion makes it an ideal choice for use in corrosive
									environments. UPVC guttering is also easy to install, making it a popular choice for industrial projects.
								</li>
								<li>
									<span>Fittings for plumbing, drainage, and HVAC applications:</span>
									<br /> UPVC fittings are often used in plumbing and drainage applications because they are easy to install and require little maintenance. UPVC fittings are also resistant to
									corrosion and can be manufactured in various sizes to meet the needs of any industrial project. UPVC fittings are also commonly used in HVAC applications because they are easy to
									install and tight seal. UPVC fittings are also resistant to corrosion and can be customized to match the industrial project's aesthetic.
								</li>
								<li>
									<span>Cable tray supports, brackets, and accessories:</span>
									<br /> UPVC cable tray supports, brackets, and accessories offer a number of benefits for industrial projects. They are durable, corrosion-resistant, and easy to install. UPVC
									products are non-conductive, making them ideal for use in environments where electrical safety is a concern. UPVC cable tray supports, brackets, and accessories are an excellent
									choice for a variety of industrial applications. They can support electrical cables, communication lines, and other types of wiring. UPVC products are also resistant to chemicals and
									UV radiation, making them ideal for use in outdoor or harsh environments. They will last for many years, and they offer a high level of protection against damage from weather,
									chemicals, and physical abuse.
								</li>
								<li>
									<span>Beams, columns and Trusses:</span>
									<br /> UPVC beams, columns, and trusses are commonly used in industrial projects. Their main advantage is that they are extremely strong and durable, making them ideal for supporting
									heavy loads. They are also resistant to weathering and corrosion, so they can be used in outdoor applications. In addition, UPVC columns and trusses are available in various sizes
									and shapes, so they can be customized to fit the specific needs of your project.
								</li>
								<li>
									<span>Electrical conduits and fittings:</span>
									<br /> UPVC electrical conduits and fittings are commonly used in industrial projects for a variety of reasons. First, UPVC is an excellent material for electrical conduits because
									it is non-conductive. This means that it will not carry an electrical current, which can be dangerous in certain situations. Additionally, UPVC is also very durable and resistant to
									weathering, meaning that it can withstand exposure to the elements without deteriorating. Finally, UPVC is also a lightweight material, making it easy to transport and install.
								</li>
								<li>
									<span>Storefronts:</span>
									<br /> UPVC Storefronts can be used in various industrial projects, from office buildings and warehouses to factories and other large-scale operations. UPVC Storefronts are superior
									to metal doors when it comes to energy efficiency because they provide a better seal. This means that they keep heat in during the winter and cool air during the summer, helping
									regulate the temperature inside the building. This can save on energy costs and make the workplace more comfortable for employees. UPVC Storefronts are also more durable than metal
									doors, which will last longer and require less maintenance. They are also more secure, as they are difficult to break into. This is important for any business that wants to protect
									its products and premises.
								</li>
								<li>
									<span>Skylights:</span>
									<br /> UPVC skylights can be used to brighten up any industrial space, whether it's a factory floor or a warehouse. They are an energy-efficient way to let natural light into the
									building and can help to reduce your electricity bills. UPVC skylights are also durable and low maintenance, making them great for industrial buildings. They are available in a
									variety of sizes and shapes to suit your needs and can be fitted with ventilation to help regulate the temperature inside the building.
								</li>
								<li>
									<span>Balustrades and railings:</span>
									<br /> UPVC balustrades and railings can be used in various applications in an industrial setting. They can be used to create safe walkways and corridors or delineate areas within a
									factory or warehouse. They can also be used to protect equipment and machinery from accidental damage. UPVC balustrades and railings are available in a range of styles and designs,
									so they can be tailored to suit the specific needs of any industrial project. They are an affordable and effective way to improve safety and efficiency in an industrial setting.
								</li>
								<li>
									<span>Cladding:</span>
									<br /> UPVC control panels are used in a variety of industries and projects. They are easy to clean and maintain, making them a popular choice for food processing and other
									clean-room applications. UPVC control panels are also popular in the construction industry. They are often used as cladding on buildings and as siding for homes. UPVC control panels
									are known for their durability, weather resistance, and low maintenance requirements, making them ideal for these applications.
								</li>
								<li>
									<span>Fencing, railings, and gates:</span>
									<br />
									UPVC fencing, railings, and gates can be used in various industrial projects to provide security and safety for employees, equipment, and products. They are also an effective way to
									demarcate areas and create visual barriers. UPVC fencing is available in various styles, colors, and designs to suit any industrial setting. They can be used to secure perimeter
									fence lines, create internal partitions, or provide safety around machinery. UPVC fencing is also an effective way to demarcate a factory or warehouse areas.
								</li>
								<li>
									<span>Greenhouse Construction:</span>
									<br />
									UPVC is a versatile material that can be used for various applications, including greenhouse construction. Greenhouses made from UPVC are typically more durable and weather-resistant
									than those made from other materials, making them ideal for use in harsh environments or areas with high winds. UPVC is also an excellent insulator, keeping temperatures inside the
									greenhouse consistent even in extreme weather conditions. In addition, UPVC greenhouses can be custom-built to any size or specifications, making them ideal for both large-scale
									commercial operations and small home gardens. They are also relatively easy to construct, so you can save time and money by building your greenhouse from UPVC materials.
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="divider"></div>
				<div className="home__faqs__footer" style={{ paddingBottom: "50px", backgroundColor: "#FAFAFC", textAlign: "center" }}>
					<h4>Want to know more about our expertise ?</h4>
					<span>
						if yes, then you can directly message us form here. <br />
						We'll respond to you withing 24 hours.
					</span>
					<Link to="/contact" className="btn-primary">
						Message Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Expertise;
