package org.revamp.core.web.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.revamp.core.model.School;
import org.revamp.core.model.SchoolImage;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class SchoolSerializer extends StdSerializer<School> {

	private static final long serialVersionUID = 3068027869893624525L;

	public SchoolSerializer() {
		this(null);
	}

	public SchoolSerializer(Class<School> t) {
		super(t);
	}

	@Override
	public void serialize(School school, JsonGenerator jgen, SerializerProvider provider)
			throws IOException, JsonProcessingException {
		try {
		jgen.writeStartObject();
		jgen.writeNumberField("id", school.getSchoolId());
		jgen.writeObjectField("schoolInfo", school.getSchoolInfo());
		jgen.writeObjectField("concats", school.getContacts());
		jgen.writeObjectField("address", school.getAddress());
		
		jgen.writeObjectField("requirements", school.getRequirements());
		jgen.writeObjectField("proofOfIds", this.convertImageWrapper(school.getSchoolImages()));
		jgen.writeEndObject();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	private SchoolImageWrapper convertImageWrapper(Set<SchoolImage> images) {
		SchoolImageWrapper imageWrapper = new SchoolImageWrapper();
		
		images.forEach(image -> {
			imageWrapper.setComments(image.getComments());
			imageWrapper.getFiles().add(image.getFilePath());
		});
		
		return imageWrapper;
	}
	
	
	private class SchoolImageWrapper {
		
		private String comments;
		private List<String> files;
		
		public String getComments() {
			return comments;
		}
		public void setComments(String comments) {
			this.comments = comments;
		}
		
		public List<String> getFiles() {
			if(files == null) {
				files = new ArrayList<>();
			}
			return files;
		}
		

		
	}
}

