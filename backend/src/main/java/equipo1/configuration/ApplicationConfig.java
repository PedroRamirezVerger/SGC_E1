package equipo1.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;

import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

@Configuration
@ComponentScan(basePackages = "equipo1")
@EnableMongoRepositories({ "equipo1.repositories" })

public class ApplicationConfig {
	/*@Bean
	public MongoDbFactory mongoDbFactory() {

		MongoClientURI uri = new MongoClientURI(
				"mongodb+srv://<sergiorodriguez>:<basedatossergio>@cluster0-mbkjd.mongodb.net/test?retryWrites=true&w=majority");

		MongoClient mongoClient = new MongoClient(uri);
		MongoDatabase database = mongoClient.getDatabase("SGC-E1");
		

	}*/

	/*@Bean
	public MongoTemplate mongoTemplate() throws Exception {

		MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
		return mongoTemplate;

	}*/
}
